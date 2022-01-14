/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WithdrawERC20Proposal,
  WithdrawERC20ProposalInterface,
} from "../WithdrawERC20Proposal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orchestrateExecute",
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
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "parameterize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000dea38038062000dea83398181016040528101906200003791906200027f565b806040518060400160405280601681526020017f576974686472617720657272616e7420746f6b656e730000000000000000000081525081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060009080519060200190620000c7929190620001a1565b50505060008173ffffffffffffffffffffffffffffffffffffffff1663e8d9735f6040518163ffffffff1660e01b815260040160e060405180830381600087803b1580156200011557600080fd5b505af11580156200012a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001509190620002ab565b505050505050905080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000431565b828054620001af9062000398565b90600052602060002090601f016020900481019282620001d357600085556200021f565b82601f10620001ee57805160ff19168380011785556200021f565b828001600101855582156200021f579182015b828111156200021e57825182559160200191906001019062000201565b5b5090506200022e919062000232565b5090565b5b808211156200024d57600081600090555060010162000233565b5090565b6000815190506200026281620003fd565b92915050565b600081519050620002798162000417565b92915050565b6000602082840312156200029257600080fd5b6000620002a28482850162000251565b91505092915050565b600080600080600080600060e0888a031215620002c757600080fd5b6000620002d78a828b0162000251565b9750506020620002ea8a828b0162000251565b9650506040620002fd8a828b0162000251565b9550506060620003108a828b0162000251565b9450506080620003238a828b0162000268565b93505060a0620003368a828b0162000251565b92505060c0620003498a828b0162000251565b91505092959891949750929550565b6000620003658262000378565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006002820490506001821680620003b157607f821691505b60208210811415620003c857620003c7620003ce565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620004088162000358565b81146200041457600080fd5b50565b62000422816200036c565b81146200042e57600080fd5b50565b6109a980620004416000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633e7f6c64146100465780637284e41614610050578063ef99fc0e1461006e575b600080fd5b61004e61008a565b005b6100586101d9565b60405161006591906106dc565b60405180910390f35b6100886004803603810190610083919061052c565b610267565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101189061073e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610186906106fe565b60405180910390fd5b61019761040b565b6101d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cd9061075e565b60405180910390fd5b50565b600080546101e690610809565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610809565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364c5ce866040518163ffffffff1660e01b815260040160a06040518083038186803b1580156102d157600080fd5b505afa1580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103099190610568565b9450505050503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561037e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061071e565b60405180910390fd5b82600260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639456fbcc600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b81526004016104b49291906106b3565b600060405180830381600087803b1580156104ce57600080fd5b505af11580156104e2573d6000803e3d6000fd5b505050506001905090565b6000813590506104fc81610945565b92915050565b60008151905061051181610945565b92915050565b6000815190506105268161095c565b92915050565b6000806040838503121561053f57600080fd5b600061054d858286016104ed565b925050602061055e858286016104ed565b9150509250929050565b600080600080600060a0868803121561058057600080fd5b600061058e88828901610517565b955050602061059f88828901610517565b94505060406105b088828901610502565b93505060606105c188828901610517565b92505060806105d288828901610502565b9150509295509295909350565b6105e88161079a565b82525050565b60006105f98261077e565b6106038185610789565b93506106138185602086016107d6565b61061c8161086a565b840191505092915050565b6000610634601d83610789565b915061063f8261087b565b602082019050919050565b6000610657601983610789565b9150610662826108a4565b602082019050919050565b600061067a601583610789565b9150610685826108cd565b602082019050919050565b600061069d602683610789565b91506106a8826108f6565b604082019050919050565b60006040820190506106c860008301856105df565b6106d560208301846105df565b9392505050565b600060208201905081810360008301526106f681846105ee565b905092915050565b6000602082019050818103600083015261071781610627565b9050919050565b600060208201905081810360008301526107378161064a565b9050919050565b600060208201905081810360008301526107578161066d565b9050919050565b6000602082019050818103600083015261077781610690565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006107a5826107ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156107f45780820151818401526020810190506107d9565b83811115610803576000848401525b50505050565b6000600282049050600182168061082157607f821691505b602082108114156108355761083461083b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f50524f504f53414c3a206f6e6c792044414f2063616e20696e766f6b65000000600082015250565b7f4c696d626f44414f3a2070726f706f73616c206c6f636b656400000000000000600082015250565b7f50524f504f53414c3a2044414f206e6f74207365740000000000000000000000600082015250565b7f4c696d626f44414f3a20657865637574696f6e206f662070726f706f73616c2060008201527f6661696c65640000000000000000000000000000000000000000000000000000602082015250565b61094e8161079a565b811461095957600080fd5b50565b610965816107cc565b811461097057600080fd5b5056fea264697066735822122064ffa4e16731213c2c6dd20bcccb2644a88d33d2c2a14888da76cdee023c0b9864736f6c63430008040033";

export class WithdrawERC20Proposal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WithdrawERC20Proposal> {
    return super.deploy(
      _dao,
      overrides || {}
    ) as Promise<WithdrawERC20Proposal>;
  }
  getDeployTransaction(
    _dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_dao, overrides || {});
  }
  attach(address: string): WithdrawERC20Proposal {
    return super.attach(address) as WithdrawERC20Proposal;
  }
  connect(signer: Signer): WithdrawERC20Proposal__factory {
    return super.connect(signer) as WithdrawERC20Proposal__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawERC20ProposalInterface {
    return new utils.Interface(_abi) as WithdrawERC20ProposalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawERC20Proposal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WithdrawERC20Proposal;
  }
}