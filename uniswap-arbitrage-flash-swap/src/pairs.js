


module.exports.getPairs = () => {

    const dex = [
        {
            dexName: "quickswap",
            router: "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
            factory: "0x5757371414417b8c6caad45baef941abc7d3ab32"
        },
        {
            dexName: "sushiswap",
            router: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
            factory: "0xc35dadb65012ec5796536bd9864ed8773abc74c4"
        },

        {
            dexName: "apeswap",
            router: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
            factory: "0xCf083Be4164828f00cAE704EC15a36D711491284"
        },

        
        {
            dexName: "dfyn",
            router: "0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429",
            factory: "0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B"
        },
    ];

    const mainToken = [
        { tokenName: "WMATIC", address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270' },
        // { tokenName: "WETH", address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' },
        { tokenName: "DAI", address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063' },
        // { tokenName: "USD", address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' }
    ];

    const slaveToken = [
        // { tokenName: "PolyDoge", address: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472' },
        // { tokenName: "miMATIC", address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1' },
        // { tokenName: "NEAR", address: '0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f' },
        { tokenName: "LINK", address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39' },
        // { tokenName: "AAVE", address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B' },
        // { tokenName: "BANANA", address: '0x5d47baba0d66083c52009271faf3f50dcc01023c' },
        // { tokenName: "DOGIRA", address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a' },
        // { tokenName: "SAND", address: '0xbbba073c31bf03b8acf7c28ef0738decf3695683' },
        // { tokenName: "KEK", address: '0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C' },
        // { tokenName: "GHST", address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7' },
        // { tokenName: "DLYCOP", address: '0x1659fFb2d40DfB1671Ac226A0D9Dcc95A774521A' },
        // { tokenName: "AMT", address: '0xedBe70ef62b74730215728eD6B3F1f8705E3c58B' }
    ];

    const pairs = [
        // {
        //     name: 'WMATIC/WETH quickswap>sushiswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: quickswap.router,
        //     targetRouter: sushiswap.router,
        //     sourceFactory: quickswap.factory,
        // },
        // {
        //     name: 'WMATIC/WETH quickswap>apeswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: quickswap.router,
        //     targetRouter: apeswap.router,
        //     sourceFactory: quickswap.factory,
        // },
        // {
        //     name: 'WMATIC/WETH sushiswap>quickswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: sushiswap.router,
        //     targetRouter: quickswap.router,
        //     sourceFactory: sushiswap.factory,
        // },
        // {
        //     name: 'WMATIC/WETH sushiswap>apeswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: sushiswap.router,
        //     targetRouter: apeswap.router,
        //     sourceFactory: sushiswap.factory,
        // },
        // {
        //     name: 'WMATIC/WETH apeswap>quickswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: apeswap.router,
        //     targetRouter: quickswap.router,
        //     sourceFactory: apeswap.factory,
        // },
        // {
        //     name: 'WMATIC/WETH apeswap>sushiswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: WETH_MAINNET,
        //     sourceRouter: apeswap.router,
        //     targetRouter: sushiswap.router,
        //     sourceFactory: apeswap.factory,
        // },

        // //99999999999999

        // {
        //     name: 'WMATIC/PolyDoge quickswap>sushiswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: quickswap.router,
        //     targetRouter: sushiswap.router,
        //     sourceFactory: quickswap.factory,
        // },
        // {
        //     name: 'WMATIC/PolyDoge quickswap>apeswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: quickswap.router,
        //     targetRouter: apeswap.router,
        //     sourceFactory: quickswap.factory,
        // },
        // {
        //     name: 'WMATIC/PolyDoge sushiswap>quickswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: sushiswap.router,
        //     targetRouter: quickswap.router,
        //     sourceFactory: sushiswap.factory,
        // },
        // {
        //     name: 'WMATIC/PolyDoge sushiswap>apeswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: sushiswap.router,
        //     targetRouter: apeswap.router,
        //     sourceFactory: sushiswap.factory,
        // },
        // {
        //     name: 'WMATIC/PolyDoge apeswap>quickswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: apeswap.router,
        //     targetRouter: quickswap.router,
        //     sourceFactory: apeswap.factory,
        // },
        // {
        //     name: 'WMATIC/PolyDoge apeswap>sushiswap',
        //     tokenBorrow: WMATIC_MAINNET,
        //     amountTokenPay: 1000,
        //     tokenPay: PolyDoge_MAINNET,
        //     sourceRouter: apeswap.router,
        //     targetRouter: sushiswap.router,
        //     sourceFactory: apeswap.factory,
        // },


    ]


    for (let i = 0; i < dex.length; i++) {
        for (let j = 0; j < dex.length; j++) {
            if (j !== i) {
                for (let i_mainToken = 0; i_mainToken < mainToken.length; i_mainToken++) {
                    for (let i_slaveToken = 0; i_slaveToken < slaveToken.length; i_slaveToken++) {

                        let pair =
                        {
                            name: `${mainToken[i_mainToken].tokenName}/${slaveToken[i_slaveToken].tokenName} ${dex[i].dexName}>${dex[j].dexName}`,
                            tokenBorrow: mainToken[i_mainToken].address,
                            amountTokenPay: 1000,
                            tokenPay: slaveToken[i_slaveToken].address,
                            sourceRouter: dex[i].router,
                            targetRouter: dex[j].router,
                            sourceFactory: dex[i].factory,
                        };
                        pairs.push(pair);

                    }
                }
            }
        }
    }


    return pairs
}