// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "../templates/UniswapV2SwapCallbackTemplate.sol";
import "../base/SwapTemplateBase.sol";
import "../../interfaces/IUniswapV2Router02.sol";
import "../../../constants/Constants.sol";

abstract contract UniswapV2SwapTemplate is
    SwapTemplateBase,
    UniswapV2SwapCallbackTemplate
{
    IUniswapV2Router02 uniswapV2Router02Contract;

    constructor() {
        uniswapV2Router02Contract = IUniswapV2Router02(
            Constants.get_BAYKERY_ROUTER()
        );
    }

    function uniswapV2Swap(
        SwapDexType swapDexType,
        address pool,
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) internal {
        if (swapDexType == SwapDexType.UniswapV2) {
            
        }
    }
}
