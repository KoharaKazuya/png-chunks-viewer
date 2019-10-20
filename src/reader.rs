use js_sys::{ArrayBuffer, Uint8Array};
use std::io::{self, Read};

pub struct ArrayBufferReader {
    inner: Uint8Array,
    inner_length: u32,
    offset: u32,
}

impl ArrayBufferReader {
    pub fn new(inner: ArrayBuffer) -> ArrayBufferReader {
        let inner = Uint8Array::new(&inner);
        let inner_length = inner.length();
        ArrayBufferReader {
            inner,
            inner_length,
            offset: 0,
        }
    }
}

impl Read for ArrayBufferReader {
    fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
        if self.offset >= self.inner_length {
            return Ok(0);
        }

        let s = self
            .inner
            .slice(self.offset, self.offset + (buf.len() as u32));
        let len = s.length();
        s.copy_to(buf);

        self.offset += len;
        Ok(len as usize)
    }
}
