// import ethers
const { ethers } = require("ethers");

// ------- connect to blockchain ------- //

// 1: We will run an ethereum node using INFURA

// 2: create INFURA project and grab link with INFURA ID

// i.e. -- JSON RPC is the protocol to fetch data from blockchain nodes
// 3: using ethers.js JsonRpcProvider, we will connect to oour ethereum node
// -- with the INFURA LINK & ID.
const INFURA_ID = '6c54094da34640d1b33a1acad4a6f029'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//  ------- fetch information from blockchain node ------- //

// to test node connection, we will fetch an account balance using ethers getBalance
// i.e. -- provider.getBalance(address)
// since blockchain transactions take time to complete, we use async await function.

const address = '0x2A20380DcA5bC24D052acfbf79ba23e988ad0050';

const main = async () => {
    balance = await provider.getBalance(address)
    // this prints out the balance and a formatted version od the balance
    console.log(`${balance}   or   ${ethers.utils.formatEther(balance)}`)
}

main();
