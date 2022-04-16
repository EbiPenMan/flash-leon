// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract SwapTemplateBase {
    enum SwapTemplateType {
        UniswapV1SwapTemplate,
        UniswapV2SwapTemplate,
        UniswapV3SwapTemplate
    }
    enum SwapDexType {
        UniswapV1,
        UniswapV2,
        UniswapV3,
        PancakeV1,
        PpancakeV2,
        Apeswap,
        Kebab,
        WaultSwap,
        Mdex,
        Pantherswap,
        Jetswap,
        Cafeswap,
        Biswap,
        Warden
    }
}
