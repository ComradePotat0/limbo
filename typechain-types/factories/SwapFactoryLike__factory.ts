/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SwapFactoryLike,
  SwapFactoryLikeInterface,
} from "../SwapFactoryLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class SwapFactoryLike__factory {
  static readonly abi = _abi;
  static createInterface(): SwapFactoryLikeInterface {
    return new utils.Interface(_abi) as SwapFactoryLikeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapFactoryLike {
    return new Contract(address, _abi, signerOrProvider) as SwapFactoryLike;
  }
}
