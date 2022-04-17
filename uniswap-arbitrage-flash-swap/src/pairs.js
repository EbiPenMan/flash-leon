const quickswap = {
    router: "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
    factory: "0x5757371414417b8c6caad45baef941abc7d3ab32"
};
const sushiswap = {
    router: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
    factory: "0xc35dadb65012ec5796536bd9864ed8773abc74c4"
};

module.exports.getPairs = () => {

    const WETH_MAINNET = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';
    const DAI_MAINNET = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063';
    const LINK_MAINNET = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c';
    const WBNB_MAINNET = '0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3';
    // const WMATIC_MAINNET = '0x0000000000000000000000000000000000001010';

    const SAND_MAINNET = '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683';
    const WMATIC_MAINNET = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270';
    const WBTC_MAINNET = '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6';
    const WMATIC_MAINNET = '0x0000000000000000000000000000000000001010';

    const pairs = [
        {
            name: 'DAI/WETH quickswap>sushiswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WETH_MAINNET,
            sourceRouter: quickswap.router,
            targetRouter: sushiswap.router,
            sourceFactory: quickswap.factory,
        },
        {
            name: 'DAI/WETH sushiswap>quickswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WETH_MAINNET,
            sourceRouter: sushiswap.router,
            targetRouter: quickswap.router,
            sourceFactory: sushiswap.factory,
        },


        {
            name: 'DAI/LINK quickswap>sushiswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: LINK_MAINNET,
            sourceRouter: quickswap.router,
            targetRouter: sushiswap.router,
            sourceFactory: quickswap.factory,
        },
        {
            name: 'DAI/LINK sushiswap>quickswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: LINK_MAINNET,
            sourceRouter: sushiswap.router,
            targetRouter: quickswap.router,
            sourceFactory: sushiswap.factory,
        },


        {
            name: 'DAI/WBNB quickswap>sushiswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WBNB_MAINNET,
            sourceRouter: quickswap.router,
            targetRouter: sushiswap.router,
            sourceFactory: quickswap.factory,
        },
        {
            name: 'DAI/WBNB sushiswap>quickswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WBNB_MAINNET,
            sourceRouter: sushiswap.router,
            targetRouter: quickswap.router,
            sourceFactory: sushiswap.factory,
        },


        {
            name: 'DAI/WMATIC quickswap>sushiswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WMATIC_MAINNET,
            sourceRouter: quickswap.router,
            targetRouter: sushiswap.router,
            sourceFactory: quickswap.factory,
        },
        {
            name: 'DAI/WMATIC sushiswap>quickswap',
            tokenBorrow: DAI_MAINNET,
            amountTokenPay: 1000,
            tokenPay: WMATIC_MAINNET,
            sourceRouter: sushiswap.router,
            targetRouter: quickswap.router,
            sourceFactory: sushiswap.factory,
        }
    ]

    return pairs
}