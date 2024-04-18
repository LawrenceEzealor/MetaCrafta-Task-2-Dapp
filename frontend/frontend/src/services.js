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
      "0xA53Efd344410Cca8a50cbf86FEbD8100EDCAdD60",
      contractABI,
      signer
    );
    console.log("clicked");
    try {
      console.log("clicked");
      const cake = await contract.getCakeOrder();
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
      "0xA53Efd344410Cca8a50cbf86FEbD8100EDCAdD60",
      contractABI,
      signer
    );
    try {
      const cakeDetails = await contract.placeCakeOrder(_color, _flavor, _size);
      cakeDetails.wait();
      console.log("Cake details set");
      await getCake();
      return cakeDetails;
    } catch (err) {
      console.log(err);
    }
  }
}
