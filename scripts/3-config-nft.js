import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x71F1D29d1966EfAa5ddaC52cD06a7f03605E8Edd", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Indian VoterID",
        description: "This NFT will give you access to the elections!",
        image: readFileSync("scripts/assets/voterid.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();