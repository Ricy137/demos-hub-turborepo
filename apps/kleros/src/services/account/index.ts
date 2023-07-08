import { create } from "zustand";
import { BrowserProvider, Signer } from "ethers";
import { domain, types } from "@utils/signUtils";

interface AccountState {
  account: string | null;
  provider: BrowserProvider | null;
  signer: Signer | null;
  connectAccount: () => void;
  signMessage: () => string | Promise<string>;
}

export const accountStore = create<AccountState>((set, get) => ({
  account: null,
  provider: null,
  signer: null,
  connectAccount: async () => {
    if (!window.ethereum) throw Error("No ethereum provider found");
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) throw Error("No accounts found");
    set({ account: accounts[0] });
  },
  signMessage: async () => {
    let signer = get().signer;
    if (!signer) {
      if (!window.ethereum) throw Error("No ethereum provider found");
      const provider = new BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      set({ signer: signer, provider: provider });
    }
    const address = get().account as string;
    const value = {
      account: { address },
      information: "sign the typed message",
    };
    const signature = await signer.signTypedData(domain, types, value);
    return signature;
  },
}));

export const useAccountAddress = () => accountStore((state) => state.account);
export const useAccountConnect = () =>
  accountStore((state) => state.connectAccount);
export const useAccountSign = () => accountStore((state) => state.signMessage);
