# IPFS File Upload Tutorial with Pinata

This project demonstrates how to upload files and JSON data to IPFS using the Pinata API. It uses `axios`, `form-data`, and `fs` modules to interact with the Pinata service.

## Prerequisites

- Node.js installed on your system.
- A Pinata account to obtain your API key and Secret API key.
- `axios`, `form-data`, and `fs` modules installed.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/MaryemHadjWannes/ipfs-tutorial.git
   cd ipfs-tutorial
   ```
2. API Keys:
   Get your Pinata API key and Secret API key from Pinata. Replace them in index.js:
   ```bash
   const pinataApiKey = "YOUR_API_KEY";
   const pinataSecretApiKey = "YOUR_SECRET_API_KEY";
   ```
## Usage

1. Run the Code:
   To run the script, execute:
   ```bash
   node index.js
   ```
2. Check the Output:
   Once uploaded, you'll see something like:
   ```bash
   JSON Uploaded: { IpfsHash: 'QmZLE6Bj...', PinSize: 95, Timestamp: '...' }
   File Uploaded: { IpfsHash: 'QmZXzqst...', PinSize: 28, Timestamp: '...' }
   ```
   Access your uploaded files via the IPFS hash:
   ```bash
   https://gateway.pinata.cloud/ipfs/QmZLE6BjMa38mP6uy7bD8iZgQA1ttwwGCma9B9pum2dg5P
   ```
   Pinata Interface:
   - You can also view the uploaded data in the Pinata Interface under IPFS Files.

   
