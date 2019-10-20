use std::{
    char,
    fmt::{self, Debug, Display},
};

#[derive(Debug)]
pub struct Chunk {
    pub length: u32,
    pub chunk_type: ChunkType,
}

impl Display for Chunk {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:}", self.chunk_type)
    }
}

pub struct ChunkType(u32);

impl From<u32> for ChunkType {
    fn from(x: u32) -> Self {
        ChunkType(x)
    }
}

impl Display for ChunkType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let c1 = char::from_u32(self.0 >> 24).unwrap_or(' ');
        let c2 = char::from_u32((self.0 >> 16) & 0xff).unwrap_or(' ');
        let c3 = char::from_u32((self.0 >> 8) & 0xff).unwrap_or(' ');
        let c4 = char::from_u32(self.0 & 0xff).unwrap_or(' ');

        write!(f, "{:}{:}{:}{:}", c1, c2, c3, c4)
    }
}

impl Debug for ChunkType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:} ({:})", self, self.0)
    }
}
