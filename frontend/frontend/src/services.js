import contractABI from "./abi.json";
const { ethers } = require("ethers");

export async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

export async function getCake() {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log("clicked");
    const contract = new ethers.Contract(
      "0x9840b337fa8982354fc4aebb1e5524e0205f35c2",
      contractABI,
      signer
    );
    console.log("clicked");
    try {
      console.log("clicked");
      const cake = await contract.getCake();
      console.log("clicked");
      console.log(cake);
      // console.log(transaction.wait)
      return cake;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function setCake(_color, _flavor, _size) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0x9840b337fa8982354fc4aebb1e5524e0205f35c2",
      contractABI,
      signer
    );
    try {
      const cakeDetails = await contract.setCake(_color, _flavor, _size);
      cakeDetails.wait();
      console.log("Cake details set");
      return cakeDetails;
    } catch (err) {
      console.log(err);
    }
  }
}
