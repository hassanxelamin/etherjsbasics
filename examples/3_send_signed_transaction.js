const { ethers } = require("ethers");

// ------- connect to blockchain ------- //

// 1: We will run an ethereum node using INFURA

// 2: create INFURA project and grab link with INFURA ID

// i.e. -- JSON RPC is the protocol to fetch data from blockchain nodes
// 3: using ethers.js JsonRpcProvider, we will connect to oour ethereum node
// -- with the KOVAN INFURA TEST NET LINK & ID.
// Using Chainlink Faucet & MetaMask, get Kovan Eth 

const INFURA_ID = '6c54094da34640d1b33a1acad4a6f029'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)


// ------ signing and sending a transaction ------ // 

const burner_account = '0x2bc3bE1FaCbCf8aA9Ac667Be2331c0E43df49Bc9'; // sender
const chainlink_account = '0x4281eCF07378Ee595C564a59048801330f3084eE'; // reciever

// burner_account (sender) private key
const privateKey = '03ff34b8365c7541d714f38a1f5f64fc5b5532b5476ff72b05fba1710ad95784'

// creating a wallet that can sign transactions using the senders privateKey 
// and connecting it to the blockchain node(provider)  
const wallet = new ethers.Wallet(privateKey, provider);

const main = async () => {

    // -- burner_account balance before transfer -- //
    const senderBalanceBefore = await provider.getBalance(burner_account)
    // -- chainlink_account balance before transfer -- //
    const recieverBalanceBefore = await provider.getBalance(chainlink_account)

    console.log(`before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`before: ${ethers.utils.formatEther(recieverBalanceBefore)}`)


    // ------------------- TRANSFER -------------------- //
    // using the wallet, we can use ether's sendTraction to 
    // send an amount of ETH send to an account
    // we use await since it is a transaction
    const tx = await wallet.sendTransaction({ 
        to: chainlink_account, 
        value:  ethers.utils.parseEther("0.025"),
    })



    // waits for transaction to finish then logs it.
    await tx.wait()
    console.log(tx)

    // -- burner_account balance After transfer -- //
    const senderBalanceAfter = await provider.getBalance(burner_account)
    // -- chainlink_account balance After transfer -- //
    const recieverBalanceAfter = await provider.getBalance(chainlink_account)
    
    console.log(`After: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`After: ${ethers.utils.formatEther(recieverBalanceAfter)}`)

}

main()