/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  LiquidityReceiverLike,
  LiquidityReceiverLikeInterface,
} from "../LiquidityReceiverLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "drain",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getPyroToken",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "registerPyroToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pyroToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "enum FeeExemption",
        name: "exemption",
        type: "uint8",
      },
    ],
    name: "setFeeExemptionStatusOnPyroForContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pyroToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "loanOfficer",
        type: "address",
      },
    ],
    name: "setPyroTokenLoanOfficer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class LiquidityReceiverLike__factory {
  static readonly abi = _abi;
  static createInterface(): LiquidityReceiverLikeInterface {
    return new utils.Interface(_abi) as LiquidityReceiverLikeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityReceiverLike {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityReceiverLike;
  }
}