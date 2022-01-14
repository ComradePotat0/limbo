/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LachesisLite, LachesisLiteInterface } from "../LachesisLite";

const _abi = [
  {
    inputs: [],
    name: "behodler",
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
        name: "token",
        type: "address",
      },
    ],
    name: "cut",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "burnable",
        type: "bool",
      },
    ],
    name: "measure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "setBehodler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "updateBehodler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105e8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063140947f11461005c57806366ce93ca146100785780637a29e02214610094578063e2ea87db146100b0578063e5b12cc0146100e1575b600080fd5b6100766004803603810190610071919061040c565b6100ff565b005b610092600480360381019061008d9190610435565b610142565b005b6100ae60048036038101906100a9919061040c565b610152565b005b6100ca60048036038101906100c5919061040c565b610283565b6040516100d892919061051d565b60405180910390f35b6100e961031e565b6040516100f691906104a2565b60405180910390f35b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61014d838383610342565b505050565b60008061015e83610283565b9150915060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2fc9d008484846040518463ffffffff1660e01b81526004016101bf939291906104e6565b600060405180830381600087803b1580156101d957600080fd5b505af11580156101ed573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aa5caa5084836040518363ffffffff1660e01b815260040161024c9291906104bd565b600060405180830381600087803b15801561026657600080fd5b505af115801561027a573d6000803e3d6000fd5b50505050505050565b6000806000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff1615151515815250509050806000015181602001519250925050915091565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60405180604001604052808315158152602001821515815250600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908315150217905550905050505050565b6000813590506103f181610584565b92915050565b6000813590506104068161059b565b92915050565b60006020828403121561041e57600080fd5b600061042c848285016103e2565b91505092915050565b60008060006060848603121561044a57600080fd5b6000610458868287016103e2565b9350506020610469868287016103f7565b925050604061047a868287016103f7565b9150509250925092565b61048d81610546565b82525050565b61049c81610558565b82525050565b60006020820190506104b76000830184610484565b92915050565b60006040820190506104d26000830185610484565b6104df6020830184610493565b9392505050565b60006060820190506104fb6000830186610484565b6105086020830185610493565b6105156040830184610493565b949350505050565b60006040820190506105326000830185610493565b61053f6020830184610493565b9392505050565b600061055182610564565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61058d81610546565b811461059857600080fd5b50565b6105a481610558565b81146105af57600080fd5b5056fea26469706673582212207507051b123fb38c5fde410b342d542e6d1d9e7c343f99b30c9db36b9605ab4f64736f6c63430008040033";

export class LachesisLite__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LachesisLite> {
    return super.deploy(overrides || {}) as Promise<LachesisLite>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LachesisLite {
    return super.attach(address) as LachesisLite;
  }
  connect(signer: Signer): LachesisLite__factory {
    return super.connect(signer) as LachesisLite__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LachesisLiteInterface {
    return new utils.Interface(_abi) as LachesisLiteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LachesisLite {
    return new Contract(address, _abi, signerOrProvider) as LachesisLite;
  }
}
