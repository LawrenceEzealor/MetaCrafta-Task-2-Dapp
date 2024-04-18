// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyCake {
    struct Cakes {
        string color;
        string flavor;
        string size;
    }

    Cakes myCake;

    function placeCakeOrder(string memory newColor, string memory newFlavor, string memory newSize) external {
        myCake = Cakes(newColor, newFlavor, newSize);
    }

    function getCakeOrder() external view returns (Cakes memory) {
        return myCake;
    }
}
