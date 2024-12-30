import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const pinataApiKey = " f3becfc2a33a135267d9"; // Replace with your API key
const pinataSecretApiKey = "34e3f9e042a50f903c83fc43a4068cc4efb21f9a3dfcd9208f98fce8ab6d915e"; // Replace with your Secret API key

// Function to upload JSON
async function uploadJSONToPinata(jsonData) {
    try {
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

        const response = await axios.post(url, jsonData, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey,
            },
        });

        console.log("JSON Uploaded:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading JSON:", error.response?.data || error.message);
    }
}

// Function to upload file
async function uploadFileToPinata(filePath) {
    try {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

        const formData = new FormData();
        formData.append("file", fs.createReadStream(filePath));

        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey,
            },
        });

        console.log("File Uploaded:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error.response?.data || error.message);
    }
}

// Example usage
(async () => {
    // Upload JSON
    const jsonData = {
        name: "Pinata Example",
        description: "Uploading JSON and files to IPFS using Pinata",
    };
    await uploadJSONToPinata(jsonData);

    // Upload a file
    const filePath = "./example.txt"; // Replace with the path to your file
    await uploadFileToPinata(filePath);
})();

