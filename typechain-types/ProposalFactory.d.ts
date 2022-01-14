/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ProposalFactoryInterface extends ethers.utils.Interface {
  functions: {
    "DAO()": FunctionFragment;
    "changeSoulUpdateProposal(address)": FunctionFragment;
    "configured()": FunctionFragment;
    "endConfiguration()": FunctionFragment;
    "lodgeProposal(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDAO(address)": FunctionFragment;
    "soulUpdateProposal()": FunctionFragment;
    "toggleWhitelistProposal(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelistedProposalContracts(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DAO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeSoulUpdateProposal",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "configured",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lodgeProposal",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setDAO", values: [string]): string;
  encodeFunctionData(
    functionFragment: "soulUpdateProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleWhitelistProposal",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedProposalContracts",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "DAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeSoulUpdateProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "configured", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lodgeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "soulUpdateProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleWhitelistProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedProposalContracts",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ProposalFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ProposalFactoryInterface;

  functions: {
    DAO(overrides?: CallOverrides): Promise<[string]>;

    changeSoulUpdateProposal(
      newProposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configured(overrides?: CallOverrides): Promise<[boolean]>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lodgeProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    soulUpdateProposal(overrides?: CallOverrides): Promise<[string]>;

    toggleWhitelistProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistedProposalContracts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DAO(overrides?: CallOverrides): Promise<string>;

  changeSoulUpdateProposal(
    newProposal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configured(overrides?: CallOverrides): Promise<boolean>;

  endConfiguration(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lodgeProposal(
    proposal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDAO(
    dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  soulUpdateProposal(overrides?: CallOverrides): Promise<string>;

  toggleWhitelistProposal(
    proposal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistedProposalContracts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DAO(overrides?: CallOverrides): Promise<string>;

    changeSoulUpdateProposal(
      newProposal: string,
      overrides?: CallOverrides
    ): Promise<void>;

    configured(overrides?: CallOverrides): Promise<boolean>;

    endConfiguration(overrides?: CallOverrides): Promise<void>;

    lodgeProposal(proposal: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDAO(dao: string, overrides?: CallOverrides): Promise<void>;

    soulUpdateProposal(overrides?: CallOverrides): Promise<string>;

    toggleWhitelistProposal(
      proposal: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistedProposalContracts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    DAO(overrides?: CallOverrides): Promise<BigNumber>;

    changeSoulUpdateProposal(
      newProposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configured(overrides?: CallOverrides): Promise<BigNumber>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lodgeProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    soulUpdateProposal(overrides?: CallOverrides): Promise<BigNumber>;

    toggleWhitelistProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistedProposalContracts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeSoulUpdateProposal(
      newProposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configured(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lodgeProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    soulUpdateProposal(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toggleWhitelistProposal(
      proposal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedProposalContracts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
