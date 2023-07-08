import { create } from "zustand";
import { BrowserProvider, Contract } from "ethers";
import LiquidABI from "@utils/abis/liquid.json";
import { LIQUID_ADDRESS } from "@utils/constants";

interface LiquidStore {
  connect: () => Contract;
  liquidContract: Contract | null;
}

const liquidStore = create<LiquidStore>((set, get) => ({
  liquidContract: null,
  connect: () => {
    if (!window.ethereum) throw Error("No ethereum provider found");
    const provider = new BrowserProvider(window.ethereum);
    const liquidContract = new Contract(LIQUID_ADDRESS, LiquidABI, provider);
    set({ liquidContract });
    return liquidContract;
  },
}));

export const useLiquidContract = () =>
  liquidStore((state) => state.liquidContract);

export const useLiquidConnect = () => liquidStore((state) => state.connect);
