import { ethers } from "ethers";

interface Ethereum extends ethers.BrowserProvider {
  request: (args: {
    method: string;
    params?: unknown[] | object;
  }) => Promise<string[]>;
}
declare global {
  interface Window {
    ethereum: Ethereum;
  }
}
