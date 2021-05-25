// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KomfyKoin is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Komfy Koin", "KFY") {
        _mint(msg.sender, initialSupply);
    }
}
