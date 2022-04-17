// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./templates/UniswapV3SwapTemplate.sol";
import "./templates/UniswapV1SwapTemplate.sol";
import "./templates/UniswapV2SwapTemplate.sol";
import "./base/SwapTemplateBase.sol";

contract Swap is
    UniswapV1SwapTemplate,
    UniswapV2SwapTemplate,
    UniswapV3SwapTemplate
{
    function swap(
        SwapTemplateType swapTemplateType,
        SwapDexType swapDexType,
        address pool,
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external {
        if (swapTemplateType == SwapTemplateType.UniswapV1SwapTemplate) {
            uniswapV1Swap(
                swapDexType,
                pool,
                token0,
                token1,
                amount0,
                amount1,
                data
            );
        } else if (swapTemplateType == SwapTemplateType.UniswapV2SwapTemplate) {
            uniswapV2Swap(
                swapDexType,
                pool,
                token0,
                token1,
                amount0,
                amount1,
                data
            );
        } else if (swapTemplateType == SwapTemplateType.UniswapV3SwapTemplate) {
            uniswapV3Swap(
                swapDexType,
                pool,
                token0,
                token1,
                amount0,
                amount1,
                data
            );
        }
    }

    function swapCallback(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) internal override {
        // access control
        require(
            msg.sender == address(0),
            "only permissioned UniswapV2 pair can call"
        );
        require(_sender == address(this), "only this contract may initiate");
    }
}
