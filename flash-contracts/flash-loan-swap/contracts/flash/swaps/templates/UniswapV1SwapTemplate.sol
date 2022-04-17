// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "../base/SwapTemplateBase.sol";
import "./UniswapV1SwapCallbackTemplate.sol";

abstract contract UniswapV1SwapTemplate is
    SwapTemplateBase,
    UniswapV1SwapCallbackTemplate
{
    constructor() {}

    function uniswapV1Swap(
        SwapDexType swapDexType,
        address pool,
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) internal {}
}
