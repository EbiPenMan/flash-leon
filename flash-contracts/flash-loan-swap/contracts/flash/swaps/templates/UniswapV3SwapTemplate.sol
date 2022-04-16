// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "../templates/UniswapV3SwapCallbackTemplate.sol";
import "../base/SwapTemplateBase.sol";

abstract contract UniswapV3SwapTemplate is
    SwapTemplateBase,
    UniswapV3SwapCallbackTemplate
{
    constructor() {}

    function uniswapV3Swap(
        SwapDexType swapDexType,
        address pool,
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) internal {}
}
