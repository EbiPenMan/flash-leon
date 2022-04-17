const request = require("async-request");

module.exports.getPrices = async () => {
    const response = await request('https://api.coingecko.com/api/v3/simple/price?ids=sand,dogira,banana,aave,link,near,dai,weth,wmatic,polydoge,miMATIC&vs_currencies=usd');

    const prices = {};



    try {
        const json = JSON.parse(response.body);
        prices['0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'.toLowerCase()] = json.dai?.usd;
        prices['0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'.toLowerCase()] = json.weth?.usd;
        prices['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'.toLowerCase()] = json.wmatic?.usd;
        prices['0x8a953cfe442c5e8855cc6c61b1293fa648bae472'.toLowerCase()] = json.polydoge?.usd;
        prices['0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'.toLowerCase()] = json.mimatic?.usd;
        prices['0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f'.toLowerCase()] = json.near?.usd;
        prices['0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'.toLowerCase()] = json.link?.usd;
        prices['0xD6DF932A45C0f255f85145f286eA0b292B21C90B'.toLowerCase()] = json.aave?.usd;
        prices['0x5d47baba0d66083c52009271faf3f50dcc01023c'.toLowerCase()] = json.banana?.usd;
        prices['0xdda40cdfe4a0090f42ff49f264a831402adb801a'.toLowerCase()] = json.dogira?.usd;
        // prices['0xbbba073c31bf03b8acf7c28ef0738decf3695683'.toLowerCase()] = json.sand?.usd;
        prices['0xbbba073c31bf03b8acf7c28ef0738decf3695683'.toLowerCase()] = null;
        // prices['??'.toLowerCase()] = json['usd-coin'].usd;


        Object.getOwnPropertyNames(prices).forEach(async function(address){
            if(prices[address] == null){
                let res =  await request('https://deep-index.moralis.io/api/v2/erc20/'+address+'/price?chain=polygon&exchange=quickswap', {
                    // This example demonstrates all of the supported options.
                    // Request method (uppercase): POST, DELETE, ...
                    method: 'GET',
                    headers: {
                        "X-API-Key": 'QTQnHOgVTWMnyF8Q7NsIKC0nfPfu7Bh0lLVN3OAeDt4vMAlN93StiWECAjN6XO9f',
                        "accept": 'application/json'
                    }
                });

                console.log("res: " , res);

                if(res != null){
                    let resParsed  =  JSON.parse(res.body);
                    if(resParsed != null && resParsed.usdPrice != null){
                        prices[address] = resParsed.usdPrice;
                    }
                }
            }
        });



    } catch (e) {
        console.error(e)
        return {};
    }

    return prices;
}

