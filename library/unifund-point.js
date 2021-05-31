require('dotenv').config()
const unichain = require('./config')

const getContract = async (address) => {
    return await unichain.contract().at(address)
}

const getUnifundContract = async () => {
    console.log(process.env[`${process.env.MODE}_UNIFUND_SMART_CONTRACT`])
    return await getContract(process.env[`${process.env.MODE}_UNIFUND_SMART_CONTRACT`])
}

const deposit = async () => {
    try {
        const unifundContract = await getUnifundContract()

        let result = await unifundContract.deposit(
            'USaw8CFcq88Ew7et25ECYmpTJmX7uCK5Dv',
            'ETH', 'BSC','TXID', 2, 1600, 2000
            ).send({
            // feeLimit: 100_000_000,
            // callValue: 0,
        });

        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

const getTransaction=async()=>{
    console.log(`asdfalksdfjalskdjf;laskhdglkasjhdl===============`)
    const tran=await unichain.unx.getTransaction('143ea493523b69f22d9cdde2d0869ddf5d47798083f4c92a2ec9a0ef236105ac')
    console.log(`tran = `, tran)
}
// deposit()

getTransaction()