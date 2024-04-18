// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MyCake {
    struct Cakes {
        string color;
        string flavor;
        string size;
    }

    Car myCake;

    function placeCakeOrder(string memory newColor, string memory newFlavor, string memory newSize) external {
        myCake = Car(newColor, newFlavor, newSize);
    }

    function getCakeOrder() external view returns (Cake memory) {
        return myCake;
    }
}
