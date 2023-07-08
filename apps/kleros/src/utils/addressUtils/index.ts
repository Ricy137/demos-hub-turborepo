import { LRUCacheFunction } from "@utils/LRUCache";
import { addressToNumber as _addressToNumber } from "./addressToNumber";
import {
  convertCfxToHex as _convertCfxToHex,
  convertHexToCfx as _convertHexToCfx,
  cfxMappedEVMSpaceAddress as _cfxMappedEVMSpaceAddress,
} from "./convertAddress";

export const addressToNumber = LRUCacheFunction(
  _addressToNumber,
  "addressToNumber"
);
export const convertCfxToHex = LRUCacheFunction(
  _convertCfxToHex,
  "convertCfxToHex"
);
export const convertHexToCfx = LRUCacheFunction(
  _convertHexToCfx,
  "convertHexToCfx"
);
export const cfxMappedEVMSpaceAddress = LRUCacheFunction(
  _cfxMappedEVMSpaceAddress,
  "cfxMappedEVMSpaceAddress"
);
