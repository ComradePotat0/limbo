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

interface GovernableStubInterface extends ethers.utils.Interface {
  functions: {
    "DAO()": FunctionFragment;
    "configured()": FunctionFragment;
    "endConfiguration()": FunctionFragment;
    "setDAO(address)": FunctionFragment;
    "userTokenBalance(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DAO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "configured",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setDAO", values: [string]): string;
  encodeFunctionData(
    functionFragment: "userTokenBalance",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "DAO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "configured", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userTokenBalance",
    data: BytesLike
  ): Result;

  events: {};
}

export class GovernableStub extends BaseContract {
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

  interface: GovernableStubInterface;

  functions: {
    DAO(overrides?: CallOverrides): Promise<[string]>;

    configured(overrides?: CallOverrides): Promise<[boolean]>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userTokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DAO(overrides?: CallOverrides): Promise<string>;

  configured(overrides?: CallOverrides): Promise<boolean>;

  endConfiguration(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDAO(
    dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userTokenBalance(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DAO(overrides?: CallOverrides): Promise<string>;

    configured(overrides?: CallOverrides): Promise<boolean>;

    endConfiguration(overrides?: CallOverrides): Promise<void>;

    setDAO(dao: string, overrides?: CallOverrides): Promise<void>;

    userTokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    DAO(overrides?: CallOverrides): Promise<BigNumber>;

    configured(overrides?: CallOverrides): Promise<BigNumber>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userTokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    configured(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDAO(
      dao: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userTokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}