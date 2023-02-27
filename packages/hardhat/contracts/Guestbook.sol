// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 0xbF4A19703bee67a66dFAc3b7a0b478265E0FBCdF
contract Guestbook {
    mapping(address => string) public guestMessage;

    event GuestMessaged(address indexed guest, string message);

    constructor() {}

    function setMessage(string memory message) external {
        guestMessage[msg.sender] = message;
        emit GuestMessaged(msg.sender, message);
    }
}
