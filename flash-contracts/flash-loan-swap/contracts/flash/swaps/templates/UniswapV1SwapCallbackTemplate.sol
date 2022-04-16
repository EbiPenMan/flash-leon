// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "../../swaps/base/SwapCallbackBase.sol";

abstract contract UniswapV1SwapCallbackTemplate is SwapCallbackBase {
    // pancake, pancakeV2, apeswap, kebab
    function pancakeCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    function waultSwapCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    function uniswapV2Call(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // mdex
    function swapV2Call(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // pantherswap
    function pantherCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // jetswap
    function jetswapCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // cafeswap
    function cafeCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // @TODO: pending release
    function BiswapCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }

    // @TODO: pending release
    function wardenCall(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) external {
        swapCallback(_sender, _amount0, _amount1, _data);
    }
}
