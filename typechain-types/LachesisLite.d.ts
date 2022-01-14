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

interface LachesisLiteInterface extends ethers.utils.Interface {
  functions: {
    "behodler()": FunctionFragment;
    "cut(address)": FunctionFragment;
    "measure(address,bool,bool)": FunctionFragment;
    "setBehodler(address)": FunctionFragment;
    "updateBehodler(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "behodler", values?: undefined): string;
  encodeFunctionData(functionFragment: "cut", values: [string]): string;
  encodeFunctionData(
    functionFragment: "measure",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setBehodler", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateBehodler",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "behodler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "measure", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBehodler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBehodler",
    data: BytesLike
  ): Result;

  events: {};
}

export class LachesisLite extends BaseContract {
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

  interface: LachesisLiteInterface;

  functions: {
    behodler(overrides?: CallOverrides): Promise<[string]>;

    cut(token: string, overrides?: CallOverrides): Promise<[boolean, boolean]>;

    measure(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBehodler(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBehodler(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  behodler(overrides?: CallOverrides): Promise<string>;

  cut(token: string, overrides?: CallOverrides): Promise<[boolean, boolean]>;

  measure(
    token: string,
    valid: boolean,
    burnable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBehodler(
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBehodler(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    behodler(overrides?: CallOverrides): Promise<string>;

    cut(token: string, overrides?: CallOverrides): Promise<[boolean, boolean]>;

    measure(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBehodler(b: string, overrides?: CallOverrides): Promise<void>;

    updateBehodler(token: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    behodler(overrides?: CallOverrides): Promise<BigNumber>;

    cut(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    measure(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBehodler(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBehodler(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    behodler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cut(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    measure(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBehodler(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBehodler(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}