import {
  Keypair,
  Connection,
  Commitment,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";
import wallet from "./wallet/wba-wallet.json";

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
  try {
    // create mint
    // const mint = await createMint(
    //   connection,
    //   keypair,
    //   keypair.publicKey,
    //   null,
    //   6
    // );

    // console.log(`Mint Created: ${mint.toBase58()}`); // 2dgk3J95dJifE7WWUeZxHZxUuDZnNGVd4GyFwHSd4L39

    // define mint
    const mint = new PublicKey("2dgk3J95dJifE7WWUeZxHZxUuDZnNGVd4GyFwHSd4L39");

  } catch (error) {
    console.log(`Oops, something went wrong: ${error}`);
  }
})();