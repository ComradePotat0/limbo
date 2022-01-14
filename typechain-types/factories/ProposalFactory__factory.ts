/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProposalFactory,
  ProposalFactoryInterface,
} from "../ProposalFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "whitelistingProposal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_soulUpdateProposal",
        type: "address",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DAO",
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
        name: "newProposal",
        type: "address",
      },
    ],
    name: "changeSoulUpdateProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "configured",
    outputs: [
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
    inputs: [],
    name: "endConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proposal",
        type: "address",
      },
    ],
    name: "lodgeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
    ],
    name: "setDAO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soulUpdateProposal",
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
        name: "proposal",
        type: "address",
      },
    ],
    name: "toggleWhitelistProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedProposalContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200148d3803806200148d833981810160405281019062000037919062000480565b8262000049816200016460201b60201c565b506200006a6200005e6200036f60201b60201c565b6200037760201b60201c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620005a7565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806200020f5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80620002285750600060149054906101000a900460ff16155b6200026a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026190620004fd565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002f257600080fd5b505afa15801562000307573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200032d919062000454565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200044e816200058d565b92915050565b6000602082840312156200046757600080fd5b600062000477848285016200043d565b91505092915050565b6000806000606084860312156200049657600080fd5b6000620004a6868287016200043d565b9350506020620004b9868287016200043d565b9250506040620004cc868287016200043d565b9150509250925092565b6000620004e56002836200051f565b9150620004f28262000564565b602082019050919050565b600060208201905081810360008301526200051881620004d6565b9050919050565b600082825260208201905092915050565b60006200053d8262000544565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b620005988162000530565b8114620005a457600080fd5b50565b610ed680620005b76000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461015557806398fabd3a14610173578063c371cd8f14610191578063e5f6f7fd146101ad578063e73a914c146101c9578063f2fde38b146101e5576100b4565b806331de3469146100b9578063478fa629146100d75780634bdc4e33146100e15780636ac353b114610111578063715018a61461012d5780638772a23a14610137575b600080fd5b6100c1610201565b6040516100ce9190610c31565b60405180910390f35b6100df610227565b005b6100fb60048036038101906100f69190610ae9565b610244565b6040516101089190610c75565b60405180910390f35b61012b60048036038101906101269190610ae9565b610264565b005b610135610324565b005b61013f6103ac565b60405161014c9190610c75565b60405180910390f35b61015d6103bf565b60405161016a9190610c31565b60405180910390f35b61017b6103e9565b6040516101889190610c31565b60405180910390f35b6101ab60048036038101906101a69190610ae9565b61040f565b005b6101c760048036038101906101c29190610ae9565b61052d565b005b6101e360048036038101906101de9190610ae9565b6105dd565b005b6101ff60048036038101906101fa9190610ae9565b6107df565b005b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001600060146101000a81548160ff021916908315150217905550565b60036020528060005260406000206000915054906101000a900460ff1681565b61026c6108d7565b73ffffffffffffffffffffffffffffffffffffffff1661028a6103bf565b73ffffffffffffffffffffffffffffffffffffffff16146102e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d790610cf0565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61032c6108d7565b73ffffffffffffffffffffffffffffffffffffffff1661034a6103bf565b73ffffffffffffffffffffffffffffffffffffffff16146103a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039790610cf0565b60405180910390fd5b6103aa60006108df565b565b600060149054906101000a900460ff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290610d10565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc7e7d5182336040518363ffffffff1660e01b81526004016104f8929190610c4c565b600060405180830381600087803b15801561051257600080fd5b505af1158015610526573d6000803e3d6000fd5b5050505050565b610536336109a5565b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806106875750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061069f5750600060149054906101000a900460ff16155b6106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d590610cb0565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b15801561076557600080fd5b505afa158015610779573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079d9190610b12565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6107e76108d7565b73ffffffffffffffffffffffffffffffffffffffff166108056103bf565b73ffffffffffffffffffffffffffffffffffffffff161461085b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085290610cf0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c290610c90565b60405180910390fd5b6108d4816108df565b50565b600033905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060149054906101000a900460ff161580610a685750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b7ebc23b826040518263ffffffff1660e01b8152600401610a179190610c31565b60206040518083038186803b158015610a2f57600080fd5b505afa158015610a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a679190610b3b565b5b610aa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9e90610cd0565b60405180910390fd5b50565b600081359050610ab981610e72565b92915050565b600081519050610ace81610e72565b92915050565b600081519050610ae381610e89565b92915050565b600060208284031215610afb57600080fd5b6000610b0984828501610aaa565b91505092915050565b600060208284031215610b2457600080fd5b6000610b3284828501610abf565b91505092915050565b600060208284031215610b4d57600080fd5b6000610b5b84828501610ad4565b91505092915050565b610b6d81610d41565b82525050565b610b7c81610d53565b82525050565b6000610b8f602683610d30565b9150610b9a82610d7f565b604082019050919050565b6000610bb2600283610d30565b9150610bbd82610dce565b602082019050919050565b6000610bd5600283610d30565b9150610be082610df7565b602082019050919050565b6000610bf8602083610d30565b9150610c0382610e20565b602082019050919050565b6000610c1b601a83610d30565b9150610c2682610e49565b602082019050919050565b6000602082019050610c466000830184610b64565b92915050565b6000604082019050610c616000830185610b64565b610c6e6020830184610b64565b9392505050565b6000602082019050610c8a6000830184610b73565b92915050565b60006020820190508181036000830152610ca981610b82565b9050919050565b60006020820190508181036000830152610cc981610ba5565b9050919050565b60006020820190508181036000830152610ce981610bc8565b9050919050565b60006020820190508181036000830152610d0981610beb565b9050919050565b60006020820190508181036000830152610d2981610c0e565b9050919050565b600082825260208201905092915050565b6000610d4c82610d5f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b7f454a000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4c696d626f44414f3a20696e76616c69642070726f706f73616c000000000000600082015250565b610e7b81610d41565b8114610e8657600080fd5b50565b610e9281610d53565b8114610e9d57600080fd5b5056fea26469706673582212207e6bc63e951289eb31c345c8641005c8824fe05fa3a7defa36a9f407ea9bf64464736f6c63430008040033";

export class ProposalFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _dao: string,
    whitelistingProposal: string,
    _soulUpdateProposal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProposalFactory> {
    return super.deploy(
      _dao,
      whitelistingProposal,
      _soulUpdateProposal,
      overrides || {}
    ) as Promise<ProposalFactory>;
  }
  getDeployTransaction(
    _dao: string,
    whitelistingProposal: string,
    _soulUpdateProposal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _dao,
      whitelistingProposal,
      _soulUpdateProposal,
      overrides || {}
    );
  }
  attach(address: string): ProposalFactory {
    return super.attach(address) as ProposalFactory;
  }
  connect(signer: Signer): ProposalFactory__factory {
    return super.connect(signer) as ProposalFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposalFactoryInterface {
    return new utils.Interface(_abi) as ProposalFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProposalFactory {
    return new Contract(address, _abi, signerOrProvider) as ProposalFactory;
  }
}
