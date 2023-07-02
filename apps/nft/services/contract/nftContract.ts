"use client";
import { create } from "zustand";
import { accountStore } from "../account";
import { Contract, ethers } from "ethers";
import { NFT_CONTRACT_ADDRESS } from "@utils/constants";
import abi from "./abi/nft.json";

interface NFTContractStore {
  // contract: Contract | null;
  connectContract: () => Promise<ethers.Contract>;
}

export const nftContractStore = create<NFTContractStore>((set, get) => ({
  // contract: null,
  connectContract: async () => {
    const provider = accountStore.getState().provider;
    if (!provider) return;
    const contract = new Contract(NFT_CONTRACT_ADDRESS, abi.abi, provider);
    // set({
    //   contract: contract,
    // });
    return contract;
  },
}));

//TODO: add subscription to accountStore provider

// export const useContract = () => nftContractStore((state) => state.contract);
export const useConnectContract = () =>
  nftContractStore((state) => state.connectContract);
