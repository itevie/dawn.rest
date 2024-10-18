use base64::engine::general_purpose;
use base64::Engine;
use std::fs::File;
use std::io::{self, Write};
use std::path::PathBuf;

// Stolen from ChatGPT
pub fn write_file_from_data_url(data_url: &str, output_file: PathBuf) -> io::Result<()> {
    // Split the data URL into the media type and the data
    let parts: Vec<&str> = data_url.split(',').collect();
    if parts.len() != 2 {
        return Err(io::Error::new(
            io::ErrorKind::InvalidInput,
            "Invalid data URL",
        ));
    }

    let data_part = parts[1];

    // Check if the data is base64 encoded
    let is_base64 = parts[0].contains(";base64");

    // Decode the data
    let decoded_data = if is_base64 {
        general_purpose::STANDARD.decode(data_part).map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("Base64 decode error: {}", e),
            )
        })?
    } else {
        data_part.as_bytes().to_vec() // If not base64, take the raw bytes
    };

    // Write the decoded data to a file
    let mut file = File::create(output_file)?;
    file.write_all(&decoded_data)?;

    Ok(())
}
