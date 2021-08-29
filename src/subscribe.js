const Web3 = require("web3");
// Dai Stablecoin ABI
const abi = require("./daiAbi.json");
const INFURA_URL =
  "wss://mainnet.infura.io/ws/v3/a086fb473a3b47698e32f1cc852e16ce";

const web3 = new Web3(INFURA_URL);

// Address of Dai Stablecoin
const address = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";

async function main() {
  const contract = new web3.eth.Contract(abi, address);

  console.log("Subscribe to Transfer event");

  contract.events.Transfer(
    {
      // filter by sender
      filter: { src: "0x39755357759ce0d7f32dc8dc45414cca409ae24e" },
    },
    (error, log) => {
      if (error) {
        console.log("Error", error);
      }

      console.log("Log", log);
    }
  );
}

main();
