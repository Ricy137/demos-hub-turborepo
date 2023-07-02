"use client";
import { useCallback, useEffect } from "react";
import { Contract, ethers } from "ethers";
import Button from "ui/components/Button";
import AuthConnectBtn from "@modules/AuthconnectBtn";
import {
  // useContract,
  useConnectContract,
} from "@services/contract/nftContract";
//TODO: temporary solution. Too shitty Abstract.
import { NFT_CONTRACT_ADDRESS } from "@utils/constants";
import abi from "@services/contract/abi/nft.json";

const NFTPage: React.FC = () => {
  const connectContract = useConnectContract();

  //TODO: temporary solution. abstract with other ways
  const handleMint = useCallback(async () => {
    try {
      let provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(NFT_CONTRACT_ADDRESS, abi.abi, signer);
      if (!contract) return;
      let tx = await contract.mintNFT(1, {
        value: ethers.parseEther("0.08"),
      });
      let res = await tx.wait();
      alert("Mint success, hash: ${tx.hash}");
    } catch (err) {
      console.log(err);
      //TODO: currently it's not for users, handle errors better in the future
      alert("Mint failed,see console for more details");
    }
  }, [connectContract]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="text-base sm:text-lg md:text-xl font-normal mx-[10%] 3xl:mx-[20%]">
        <p className="mb-8">
          Each NFT costs 0.08 Goerly ETH and each address can mint 3 NFT at
          most.
        </p>
        <p>
          Don&apos;t worry, Goerly ETH is fack money.And if you don&apos;t have
          any Goerly ETH.Find me on Twitter and I shall send you some &lt;3.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[24px] text-base m-8 lg:m-0 sm:text-lg md:text-xl">
        <AuthConnectBtn>
          <Button color="gradient" onClick={handleMint}>
            Mint 1 NFT
          </Button>
        </AuthConnectBtn>
        <Button
          href="https://testnet.rarible.com/token/0x7763037183e18dbf6f968920bfa54812b4553005:0"
          target="_blank"
          color="gradient"
        >
          Check the collection on Rarible
        </Button>
      </div>
    </div>
  );
};

export default NFTPage;
