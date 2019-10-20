use combine::{
    parser::repeat::many,
    stream::{buffered::BufferedStream, state::State, ReadStream},
    tokens, Parser,
};
use js_sys::{ArrayBuffer, Object, Reflect};
use parser::chunk;
use reader::ArrayBufferReader;
use std::io::Read;
use wasm_bindgen::{prelude::*, JsCast};
use web_sys::{Blob, FileReader};

mod parser;
mod png;
mod reader;

#[wasm_bindgen]
pub fn run(data: Blob) {
    let file_reader = FileReader::new().expect("failed to create FileReader");
    let cb = Closure::once_into_js(Box::new(move |event: JsValue| {
        let event = Object::from(event);
        let target = Reflect::get(&event, &"target".into()).expect("failed to unwrap target");
        let result = Reflect::get(&target, &"result".into()).expect("failed to unwrap result");

        let reader = ArrayBufferReader::new(ArrayBuffer::from(result));

        parse(reader)
            .and_then(|result| {
                show(&result);
                Ok(())
            })
            .or_else(|err| {
                show(&err);
                Ok(())
            })
    }));
    file_reader.set_onload(Some(cb.unchecked_ref()));

    file_reader
        .read_as_array_buffer(&data)
        .expect("failed to read as array buffer");
}

fn parse<T: Read>(reader: T) -> Result<String, String> {
    let stream = BufferedStream::new(State::new(ReadStream::new(reader)), 1);

    let sig = vec![0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
    let signature = tokens(
        |&l, r| l == r,
        "PNG file signature (89 50 4E 47 0D 0A 1A 0A)".into(),
        &sig[..],
    );

    let png_chunks = many::<Vec<_>, _>(chunk());

    let (result, _) = signature
        .with(png_chunks)
        .parse(stream)
        .map_err(|err| format!("{:?}", err))?;

    let output = result
        .into_iter()
        .map(|chunk| format!("{:}", chunk))
        .fold(String::new(), |acc, c| acc + "\n" + &c);
    Ok(output)
}

fn show(message: &str) {
    let window = web_sys::window().expect("failed to get window object");
    let document = window.document().expect("failed to get document");
    let output = document
        .query_selector("#output")
        .expect("failed to get #output element")
        .expect("failed to get #output element");

    output.set_text_content(Some(message));
}
