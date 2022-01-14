/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockFOTToken, MockFOTTokenInterface } from "../MockFOTToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b5060405162001b7b38038062001b7b83398181016040528101906200003b91906200033c565b82600490805190602001906200005392919062000203565b5081600590805190602001906200006c92919062000203565b50806000819055506200008f3368056bc75e2d631000006200009860201b60201c565b50505062000695565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200010b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200010290620003fc565b60405180910390fd5b6200011f60008383620001fe60201b60201c565b8060036000828254620001339190620004ab565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200018b9190620004ab565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001f291906200041e565b60405180910390a35050565b505050565b828054620002119062000548565b90600052602060002090601f01602090048101928262000235576000855562000281565b82601f106200025057805160ff191683800117855562000281565b8280016001018555821562000281579182015b828111156200028057825182559160200191906001019062000263565b5b50905062000290919062000294565b5090565b5b80821115620002af57600081600090555060010162000295565b5090565b6000620002ca620002c48462000464565b6200043b565b905082815260208101848484011115620002e357600080fd5b620002f084828562000512565b509392505050565b600082601f8301126200030a57600080fd5b81516200031c848260208601620002b3565b91505092915050565b60008151905062000336816200067b565b92915050565b6000806000606084860312156200035257600080fd5b600084015167ffffffffffffffff8111156200036d57600080fd5b6200037b86828701620002f8565b935050602084015167ffffffffffffffff8111156200039957600080fd5b620003a786828701620002f8565b9250506040620003ba8682870162000325565b9150509250925092565b6000620003d3601f836200049a565b9150620003e08262000652565b602082019050919050565b620003f68162000508565b82525050565b600060208201905081810360008301526200041781620003c4565b9050919050565b6000602082019050620004356000830184620003eb565b92915050565b6000620004476200045a565b90506200045582826200057e565b919050565b6000604051905090565b600067ffffffffffffffff82111562000482576200048162000612565b5b6200048d8262000641565b9050602081019050919050565b600082825260208201905092915050565b6000620004b88262000508565b9150620004c58362000508565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004fd57620004fc620005b4565b5b828201905092915050565b6000819050919050565b60005b838110156200053257808201518184015260208101905062000515565b8381111562000542576000848401525b50505050565b600060028204905060018216806200056157607f821691505b60208210811415620005785762000577620005e3565b5b50919050565b620005898262000641565b810181811067ffffffffffffffff82111715620005ab57620005aa62000612565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620006868162000508565b81146200069257600080fd5b50565b6114d680620006a56000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e88565b60405180910390f35b6100e660048036038101906100e19190610cd6565b610308565b6040516100f39190610e6d565b60405180910390f35b610104610326565b6040516101119190610f8a565b60405180910390f35b610134600480360381019061012f9190610c87565b610330565b6040516101419190610e6d565b60405180910390f35b610152610431565b60405161015f9190610fa5565b60405180910390f35b610182600480360381019061017d9190610cd6565b61043a565b60405161018f9190610e6d565b60405180910390f35b6101b260048036038101906101ad9190610c22565b6104e6565b6040516101bf9190610f8a565b60405180910390f35b6101d061052f565b6040516101dd9190610e88565b60405180910390f35b61020060048036038101906101fb9190610cd6565b6105c1565b60405161020d9190610e6d565b60405180910390f35b610230600480360381019061022b9190610cd6565b6106b5565b60405161023d9190610e6d565b60405180910390f35b610260600480360381019061025b9190610c4b565b6106d3565b60405161026d9190610f8a565b60405180910390f35b60606004805461028590611179565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611179565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c61031561075a565b8484610762565b6001905092915050565b6000600354905090565b600061033d84848461092d565b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061038861075a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610f0a565b60405180910390fd5b6104258561041461075a565b858461042091906110bd565b610762565b60019150509392505050565b60006012905090565b60006104dc61044761075a565b84846002600061045561075a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d79190610fdc565b610762565b6001905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606005805461053e90611179565b80601f016020809104026020016040519081016040528092919081815260200182805461056a90611179565b80156105b75780601f1061058c576101008083540402835291602001916105b7565b820191906000526020600020905b81548152906001019060200180831161059a57829003601f168201915b5050505050905090565b600080600260006105d061075a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068490610f6a565b60405180910390fd5b6106aa61069861075a565b8585846106a591906110bd565b610762565b600191505092915050565b60006106c96106c261075a565b848461092d565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c990610f4a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083990610eca565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109209190610f8a565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561099d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099490610f2a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0490610eaa565b60405180910390fd5b610a18838383610bf3565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690610eea565b60405180910390fd5b60006103e860005484610ab29190611063565b610abc9190611032565b90508282610aca91906110bd565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508083610b1991906110bd565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b679190610fdc565b925050819055508060036000828254610b8091906110bd565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610be49190610f8a565b60405180910390a35050505050565b505050565b600081359050610c0781611472565b92915050565b600081359050610c1c81611489565b92915050565b600060208284031215610c3457600080fd5b6000610c4284828501610bf8565b91505092915050565b60008060408385031215610c5e57600080fd5b6000610c6c85828601610bf8565b9250506020610c7d85828601610bf8565b9150509250929050565b600080600060608486031215610c9c57600080fd5b6000610caa86828701610bf8565b9350506020610cbb86828701610bf8565b9250506040610ccc86828701610c0d565b9150509250925092565b60008060408385031215610ce957600080fd5b6000610cf785828601610bf8565b9250506020610d0885828601610c0d565b9150509250929050565b610d1b81611103565b82525050565b6000610d2c82610fc0565b610d368185610fcb565b9350610d46818560208601611146565b610d4f81611238565b840191505092915050565b6000610d67602383610fcb565b9150610d7282611249565b604082019050919050565b6000610d8a602283610fcb565b9150610d9582611298565b604082019050919050565b6000610dad602683610fcb565b9150610db8826112e7565b604082019050919050565b6000610dd0602883610fcb565b9150610ddb82611336565b604082019050919050565b6000610df3602583610fcb565b9150610dfe82611385565b604082019050919050565b6000610e16602483610fcb565b9150610e21826113d4565b604082019050919050565b6000610e39602583610fcb565b9150610e4482611423565b604082019050919050565b610e588161112f565b82525050565b610e6781611139565b82525050565b6000602082019050610e826000830184610d12565b92915050565b60006020820190508181036000830152610ea28184610d21565b905092915050565b60006020820190508181036000830152610ec381610d5a565b9050919050565b60006020820190508181036000830152610ee381610d7d565b9050919050565b60006020820190508181036000830152610f0381610da0565b9050919050565b60006020820190508181036000830152610f2381610dc3565b9050919050565b60006020820190508181036000830152610f4381610de6565b9050919050565b60006020820190508181036000830152610f6381610e09565b9050919050565b60006020820190508181036000830152610f8381610e2c565b9050919050565b6000602082019050610f9f6000830184610e4f565b92915050565b6000602082019050610fba6000830184610e5e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fe78261112f565b9150610ff28361112f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611027576110266111ab565b5b828201905092915050565b600061103d8261112f565b91506110488361112f565b925082611058576110576111da565b5b828204905092915050565b600061106e8261112f565b91506110798361112f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110b2576110b16111ab565b5b828202905092915050565b60006110c88261112f565b91506110d38361112f565b9250828210156110e6576110e56111ab565b5b828203905092915050565b60006110fc8261110f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611164578082015181840152602081019050611149565b83811115611173576000848401525b50505050565b6000600282049050600182168061119157607f821691505b602082108114156111a5576111a4611209565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61147b816110f1565b811461148657600080fd5b50565b6114928161112f565b811461149d57600080fd5b5056fea2646970667358221220c8544ec7feaf9c5f783c94a2d9dd88f368e1ca6ebe4702017e6a4ea7c2c8a99864736f6c63430008040033";

export class MockFOTToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockFOTToken> {
    return super.deploy(
      name_,
      symbol_,
      fee,
      overrides || {}
    ) as Promise<MockFOTToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, fee, overrides || {});
  }
  attach(address: string): MockFOTToken {
    return super.attach(address) as MockFOTToken;
  }
  connect(signer: Signer): MockFOTToken__factory {
    return super.connect(signer) as MockFOTToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFOTTokenInterface {
    return new utils.Interface(_abi) as MockFOTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFOTToken {
    return new Contract(address, _abi, signerOrProvider) as MockFOTToken;
  }
}