use super::super::png::{Chunk as ChunkData, ChunkType};
use combine::{
    parser::{
        byte::num::be_u32,
        item::{any, value},
        repeat::skip_count_min_max,
    },
    ParseError, Parser, Stream,
};

pub fn chunk<I>() -> impl Parser<Input = I, Output = ChunkData>
where
    I: Stream<Item = u8>,
    I::Error: ParseError<I::Item, I::Range, I::Position>,
{
    (be_u32(), be_u32())
        .then(|(length, chunk_type)| {
            skip_count_min_max(length as usize, length as usize, any())
                .with(value((length, chunk_type)))
        })
        .map(|(length, chunk_type)| ChunkData {
            length,
            chunk_type: ChunkType::from(chunk_type),
        })
        .skip(be_u32())
}
