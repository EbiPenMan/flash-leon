const request = require("async-request");

module.exports.getPrices = async () => {
    const response = await request('https://api.coingecko.com/api/v3/simple/price?ids=dai,weth,link,wbnb,wmatic&vs_currencies=usd');

    const prices = {};

    try {
        const json = JSON.parse(response.body);
        prices['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'.toLowerCase()] = json.dai.usd;
        prices['0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'.toLowerCase()] = json.weth.usd;
        prices['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'.toLowerCase()] = json.link.usd;
        prices['0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3'.toLowerCase()] = json.wbnb.usd;
        prices['0x0000000000000000000000000000000000001010'.toLowerCase()] = json.wmatic.usd;
        // prices['??'.toLowerCase()] = json['usd-coin'].usd;
    } catch (e) {
        console.error(e)
        return {};
    }

    return prices;
}
