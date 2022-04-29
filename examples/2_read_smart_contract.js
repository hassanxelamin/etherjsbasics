const { ethers } = require("ethers");

// ------- connect to blockchain ------- //

// 1: We will run an ethereum node using INFURA

// 2: create INFURA project and grab link with INFURA ID

// i.e. -- JSON RPC is the protocol to fetch data from blockchain nodes
// 3: using ethers.js JsonRpcProvider, we will connect to oour ethereum node
// -- with the INFURA LINK & ID.

const INFURA_ID = '6c54094da34640d1b33a1acad4a6f029'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)


// in order to speak to contract, you must set up Contract Object which
// take 3 parameters: address, abi, signer or provider
// i.e. -- new ethers.Contract( address , abi , signerOrProvider )
// ABI -- (Abstract Binary Interface) is a JSON object version of the smart contract.
// signerOrProvider -- By passing in a Provider, this will return a read only Contract.
// signerOrProvider -- By passing in a Signer. this will return a Contract which will act on behalf of that signer



const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI Contract Address

// this allows you to extract only the functions you want from abi
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const contract = new ethers.Contract(address, ERC20_ABI, provider)


const main = async () => {
    const name = await contract.name()
    console.log("name", name)
}

main()