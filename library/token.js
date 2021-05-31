require('dotenv').config()
const Unichain = require('@uniworld/unichain-js')
const unichain = require('./config')
const getContract = async (address) => {
    return await unichain.contract().at(address)
}

const getUsdfContract = async () => {
    // console.log(process.env[`${process.env.MODE}_USDF_CONTRACT`])
    return await getContract(process.env[`${process.env.MODE}_UMTT_TOKEN_ADDRESS`])
}

const issue = async (to, value) => {
    try {
        const usdfContract = await getUsdfContract()

        let result = await usdfContract.issue(to, value).send({
            // feeLimit: 100_000_000,
            // callValue: 0,
        });

        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

const addWhileList = async () => {
    try {
        const usdfContract = await getUsdfContract()

        let result = await usdfContract.addWhileList('UXaP6E8rsrH3yhAp3yWcM6nPfRpfR37jVr').send({
            // feeLimit: 100_000_000,
            // callValue: 0,
        });

        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

const burn = async (from, value) => {
    try {
        const usdfContract = await getUsdfContract()

        let result = await usdfContract.burn(from, value).send({
            // feeLimit: 100_000_000,
            // callValue: 0,
        });

        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

const balanceOf = async (address) => {
    const usdfContract = await getUsdfContract()
    const balance = await usdfContract.balanceOf(address).call()
    console.log(balance.toString())
}


async function createTokenContract(privateKey, tokenAddress) {
    const host = process.env[`${process.env.MODE}_HOST`]
    const relayHost = process.env[`${process.env.MODE}_RELAY_HOST`]
    const unichain = new Unichain({
        fullHost: host,
        solidityNode: relayHost,
        privateKey: privateKey
    })

    return await unichain.contract().at(tokenAddress)
}

async function transferToken(privateKey, tokenAddress, to, amount) {
    const tokenContract = await createTokenContract(privateKey, tokenAddress)

    let result = await tokenContract.transfer(to, amount).send({})
    console.log(result)
    return result
}


const balanceTokenOf = async (tokenAddress, address) => {
    try {
        const tokenContract = await getContract(tokenAddress)
        const balance = await tokenContract.balanceOf(address).call()
        console.log(`balanceTokenOf = `, balance.toString())
    } catch (error) {
        throw error
    }
}




// transferToken('',"UT5VYwshpTRXniGGN5g97EKHeGuKVieb8Y", 'UTa167CrarmCZwouirsRMHT3BzuDUerqvk', 100000000000000)

balanceTokenOf('UT5VYwshpTRXniGGN5g97EKHeGuKVieb8Y', 'UedoBxCniTPg3tRjVw5DNd5EymAc2udCZd')