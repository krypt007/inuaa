import { NextApiRequest, NextApiResponse } from "next";
// import { IncomingForm } from "formidable";
// import { Engine } from "@thirdweb-dev/engine";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BUSINESSES_CONTRACT_ADDRESS } from "../../constants/contracts";
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed, please use POST" });
//   }

//   const form = new IncomingForm();

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Error parsing the file upload" });
//     }

//     const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
//     const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
//     const address = Array.isArray(fields.address) ? fields.address[0] : fields.address;
//     const imageFile = files.image ? files.image[0] : null;

//     if (!name || !description || !imageFile || !address) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const {
//       THIRDWEB_ENGINE_URL,
//       THIRDWEB_ENGINE_ACCESS_TOKEN,
//       THIRDWEB_ENGINE_WALLET,
//       THIRDWEB_AUTH_SECRET_KEY
//     } = process.env;

//     if (!THIRDWEB_ENGINE_URL || !THIRDWEB_ENGINE_ACCESS_TOKEN || !THIRDWEB_ENGINE_WALLET || !THIRDWEB_AUTH_SECRET_KEY) {
//       return res.status(500).json({ error: "Missing environment variables" });
//     }

//     try {
//       const storage = new ThirdwebStorage({ secretKey: THIRDWEB_AUTH_SECRET_KEY });

//       // Read the file from the temporary path
//       const fileData = fs.readFileSync(imageFile.filepath);

//       // Upload the file to IPFS
//       const uri = await storage.upload(fileData);

//       console.log("Image uploaded to IPFS: " + uri);

//       const engine = new Engine({
//         url: THIRDWEB_ENGINE_URL,
//         accessToken: THIRDWEB_ENGINE_ACCESS_TOKEN,
//       }); 

//       const nftMetadata = {
//         name: name,
//         image: uri,
//         description: description,
//       };

//       const response = await engine.erc721.mintTo(
//         "binance-testnet",
//         BUSINESSES_CONTRACT_ADDRESS,
//         THIRDWEB_ENGINE_WALLET,
//         {
//           receiver: address,
//           metadata: nftMetadata,
//         }
//       );

//       console.log("NFT minted: ", response);

//       res.status(200).json({ message: "NFT minted successfully", response });

//       // Cleanup: Delete the temporary file
//       fs.unlinkSync(imageFile.filepath);
//     } catch (error: any) {
//       console.error("Error processing file: ", error);
//       res.status(500).json({ error: error.message || "An error occurred during minting" });
//     }
//   });
};

export default handler;