const Web3 = require("web3");
// add abi
const abi = require("./daiAbi.json");

// infura things: allows you to run ethereum node
const INFURA_URL =
  "https://mainnet.infura.io/v3/a086fb473a3b47698e32f1cc852e16ce";

const web3 = new Web3(INFURA_URL);

// Address of the dai stable coin
const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";

async function main() {
  const latest = await web3.eth.getBlockNumber();

  console.log("Latest Block: ", latest);

  const contract = new web3.eth.Contract(abi, daiAddress);

  // console.log(`0`);
  const logs = await contract.getPastEvents("Transfer", {
    fromBlock: latest - 100000,
    toBlock: latest,
    filter: { dst: "0x39755357759ce0d7f32dc8dc45414cca409ae24e" },
  });
  // console.log(`1`);

  console.log(
    "Senders",
    logs.map((log) => log.returnValues.dst),
    `${logs.length} logs`
  );
}

main();
