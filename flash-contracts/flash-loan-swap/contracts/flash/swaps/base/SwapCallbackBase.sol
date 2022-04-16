// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

abstract contract SwapCallbackBase {
    function swapCallback(
        address _sender,
        uint256 _amount0,
        uint256 _amount1,
        bytes calldata _data
    ) internal virtual;
}
