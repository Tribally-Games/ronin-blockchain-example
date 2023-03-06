const dotenv = require('dotenv');
const Web3 = require('web3');
const ERC20_ABI = require('./erc20.json');

dotenv.config();

(async () => {
    const web3 = new Web3(`http://${process.env.RONIN_HOST}`);
    const slp = new web3.eth.Contract(ERC20_ABI, '0xa8754b9fa15fc18bb59458815510e40a12cd2014');

    const events = await getBurntSLP(slp);
    console.log(events);
})();

async function getBurntSLP(slp) {
    return new Promise((resolve, reject) => {
        slp.getPastEvents('Transfer', {
            filter: { to: '0x0000000000000000000000000000000000000000' },
            fromBlock: 22104500,
            toBlock: 22104682,
        }, (error, events) => {
            if (error) {
                return reject(error);
            }
    
            resolve(events);
        });
    })
}