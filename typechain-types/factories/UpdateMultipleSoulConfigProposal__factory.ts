/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpdateMultipleSoulConfigProposal,
  UpdateMultipleSoulConfigProposalInterface,
} from "../UpdateMultipleSoulConfigProposal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "address",
        name: "_limbo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ammHelper",
        type: "address",
      },
      {
        internalType: "address",
        name: "morgothTokenApprover",
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
        internalType: "uint256",
        name: "crossingThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "soulType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "state",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetAPY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "daiThreshold",
        type: "uint256",
      },
    ],
    name: "parameterize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015683803806200156883398181016040528101906200003791906200029c565b848481600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600090805190602001906200009292919062000163565b50505082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050620004f5565b828054620001719062000400565b90600052602060002090601f016020900481019282620001955760008555620001e1565b82601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b5b808211156200020f576000816000905550600101620001f5565b5090565b60006200022a620002248462000360565b62000337565b9050828152602081018484840111156200024357600080fd5b62000250848285620003ca565b509392505050565b6000815190506200026981620004db565b92915050565b600082601f8301126200028157600080fd5b81516200029384826020860162000213565b91505092915050565b600080600080600060a08688031215620002b557600080fd5b6000620002c58882890162000258565b955050602086015167ffffffffffffffff811115620002e357600080fd5b620002f1888289016200026f565b9450506040620003048882890162000258565b9350506060620003178882890162000258565b92505060806200032a8882890162000258565b9150509295509295909350565b60006200034362000356565b905062000351828262000436565b919050565b6000604051905090565b600067ffffffffffffffff8211156200037e576200037d6200049b565b5b6200038982620004ca565b9050602081019050919050565b6000620003a382620003aa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003ea578082015181840152602081019050620003cd565b83811115620003fa576000848401525b50505050565b600060028204905060018216806200041957607f821691505b6020821081141562000430576200042f6200046c565b5b50919050565b6200044182620004ca565b810181811067ffffffffffffffff821117156200046357620004626200049b565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004e68162000396565b8114620004f257600080fd5b50565b61106380620005056000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633e7f6c64146100465780637284e416146100505780639a49e1561461006e575b600080fd5b61004e61008a565b005b6100586101d9565b6040516100659190610c63565b60405180910390f35b6100886004803603810190610083919061097a565b610267565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610121576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011890610ce5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018690610ca5565b60405180910390fd5b61019761056b565b6101d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cd90610d05565b60405180910390fd5b50565b600080546101e690610de5565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610de5565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364c5ce866040518163ffffffff1660e01b815260040160a06040518083038186803b1580156102d157600080fd5b505afa1580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103099190610a6a565b9450505050503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561037e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590610cc5565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d8b964e6896040518263ffffffff1660e01b81526004016103d99190610be7565b60206040518083038186803b1580156103f157600080fd5b505afa158015610405573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104299190610a18565b610468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045f90610c85565b60405180910390fd5b60026040518060e001604052808a73ffffffffffffffffffffffffffffffffffffffff16815260200189815260200188815260200187815260200186815260200185815260200184815250908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015550505050505050505050565b600080600090505b600280549050811015610909576000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663421e5b48600284815481106105fa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702016005015460028581548110610646577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060070201600601546040518363ffffffff1660e01b8152600401610675929190610d25565b60206040518083038186803b15801561068d57600080fd5b505afa1580156106a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c59190610a41565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d4a4bdee6002848154811061073f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906007020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600285815481106107ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906007020160010154600286815481106107f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702016002015460028781548110610843577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060070201600301546002888154811061088f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906007020160040154876040518763ffffffff1660e01b81526004016108c396959493929190610c02565b600060405180830381600087803b1580156108dd57600080fd5b505af11580156108f1573d6000803e3d6000fd5b5050505050808061090190610e17565b915050610573565b506001905090565b60008135905061092081610fe8565b92915050565b60008151905061093581610fe8565b92915050565b60008151905061094a81610fff565b92915050565b60008135905061095f81611016565b92915050565b60008151905061097481611016565b92915050565b600080600080600080600060e0888a03121561099557600080fd5b60006109a38a828b01610911565b97505060206109b48a828b01610950565b96505060406109c58a828b01610950565b95505060606109d68a828b01610950565b94505060806109e78a828b01610950565b93505060a06109f88a828b01610950565b92505060c0610a098a828b01610950565b91505092959891949750929550565b600060208284031215610a2a57600080fd5b6000610a388482850161093b565b91505092915050565b600060208284031215610a5357600080fd5b6000610a6184828501610965565b91505092915050565b600080600080600060a08688031215610a8257600080fd5b6000610a9088828901610965565b9550506020610aa188828901610965565b9450506040610ab288828901610926565b9350506060610ac388828901610965565b9250506080610ad488828901610926565b9150509295509295909350565b610aea81610d6a565b82525050565b6000610afb82610d4e565b610b058185610d59565b9350610b15818560208601610db2565b610b1e81610ebe565b840191505092915050565b6000610b36603383610d59565b9150610b4182610ecf565b604082019050919050565b6000610b59601d83610d59565b9150610b6482610f1e565b602082019050919050565b6000610b7c601983610d59565b9150610b8782610f47565b602082019050919050565b6000610b9f601583610d59565b9150610baa82610f70565b602082019050919050565b6000610bc2602683610d59565b9150610bcd82610f99565b604082019050919050565b610be181610da8565b82525050565b6000602082019050610bfc6000830184610ae1565b92915050565b600060c082019050610c176000830189610ae1565b610c246020830188610bd8565b610c316040830187610bd8565b610c3e6060830186610bd8565b610c4b6080830185610bd8565b610c5860a0830184610bd8565b979650505050505050565b60006020820190508181036000830152610c7d8184610af0565b905092915050565b60006020820190508181036000830152610c9e81610b29565b9050919050565b60006020820190508181036000830152610cbe81610b4c565b9050919050565b60006020820190508181036000830152610cde81610b6f565b9050919050565b60006020820190508181036000830152610cfe81610b92565b9050919050565b60006020820190508181036000830152610d1e81610bb5565b9050919050565b6000604082019050610d3a6000830185610bd8565b610d476020830184610bd8565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000610d7582610d88565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610dd0578082015181840152602081019050610db5565b83811115610ddf576000848401525b50505050565b60006002820490506001821680610dfd57607f821691505b60208210811415610e1157610e10610e8f565b5b50919050565b6000610e2282610da8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e5557610e54610e60565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4d4f52474f54483a20746f6b656e206e6f7420617070726f76656420666f722060008201527f6c697374696e67206f6e204265686f646c657200000000000000000000000000602082015250565b7f50524f504f53414c3a206f6e6c792044414f2063616e20696e766f6b65000000600082015250565b7f4c696d626f44414f3a2070726f706f73616c206c6f636b656400000000000000600082015250565b7f50524f504f53414c3a2044414f206e6f74207365740000000000000000000000600082015250565b7f4c696d626f44414f3a20657865637574696f6e206f662070726f706f73616c2060008201527f6661696c65640000000000000000000000000000000000000000000000000000602082015250565b610ff181610d6a565b8114610ffc57600080fd5b50565b61100881610d7c565b811461101357600080fd5b50565b61101f81610da8565b811461102a57600080fd5b5056fea26469706673582212203875656af8029dc34ab0c11d21c10cf781e20d8d300ca8ab6582062afbcc390c64736f6c63430008040033";

export class UpdateMultipleSoulConfigProposal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    dao: string,
    _description: string,
    _limbo: string,
    _ammHelper: string,
    morgothTokenApprover: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpdateMultipleSoulConfigProposal> {
    return super.deploy(
      dao,
      _description,
      _limbo,
      _ammHelper,
      morgothTokenApprover,
      overrides || {}
    ) as Promise<UpdateMultipleSoulConfigProposal>;
  }
  getDeployTransaction(
    dao: string,
    _description: string,
    _limbo: string,
    _ammHelper: string,
    morgothTokenApprover: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      dao,
      _description,
      _limbo,
      _ammHelper,
      morgothTokenApprover,
      overrides || {}
    );
  }
  attach(address: string): UpdateMultipleSoulConfigProposal {
    return super.attach(address) as UpdateMultipleSoulConfigProposal;
  }
  connect(signer: Signer): UpdateMultipleSoulConfigProposal__factory {
    return super.connect(signer) as UpdateMultipleSoulConfigProposal__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpdateMultipleSoulConfigProposalInterface {
    return new utils.Interface(
      _abi
    ) as UpdateMultipleSoulConfigProposalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdateMultipleSoulConfigProposal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpdateMultipleSoulConfigProposal;
  }
}
