const Web3 = require("web3");
// add abi
const abi = require("./jpycAbi.json");

// infura things: allows you to run ethereum node
const INFURA_URL =
  "https://mainnet.infura.io/v3/a086fb473a3b47698e32f1cc852e16ce";

const web3 = new Web3(INFURA_URL);

// Address of the dai stable coin
const daiAddress = "0x2370f9d504c7a6e775bf6e14b3f12846b594cd53";

async function main() {
  const latest = await web3.eth.getBlockNumber();

  console.log("Latest Block: ", latest);

  const contract = new web3.eth.Contract(abi, daiAddress);

  // console.log(`0`);
  const logs = await contract.getPastEvents("allEvents", {
    fromBlock: latest - 100,
    toBlock: latest,
    // filter: { dst: "0x39755357759ce0d7f32dc8dc45414cca409ae24e" },
  });
  // console.log(`1`);

  console.log("logs", logs, `${logs.length} logs`);
}

main();
