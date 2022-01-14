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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BehodlerLiteInterface extends ethers.utils.Interface {
  functions: {
    "MIN_LIQUIDITY()": FunctionFragment;
    "addLiquidity(address,uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "config()": FunctionFragment;
    "configureScarcity(uint256,uint256,address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "getConfiguration()": FunctionFragment;
    "name()": FunctionFragment;
    "setLachesis(address)": FunctionFragment;
    "setReceiver(address)": FunctionFragment;
    "setSafetParameters(uint8,uint8)": FunctionFragment;
    "setTokenBurnable(address,bool)": FunctionFragment;
    "setValidToken(address,bool,bool)": FunctionFragment;
    "swap(address,address,uint256,uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenBurnable(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "whiteListUsers(address)": FunctionFragment;
    "withdrawLiquidity(address,uint256)": FunctionFragment;
    "withdrawLiquidityFindSCX(address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MIN_LIQUIDITY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "configureScarcity",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "setLachesis", values: [string]): string;
  encodeFunctionData(functionFragment: "setReceiver", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSafetParameters",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenBurnable",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidToken",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenBurnable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whiteListUsers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidityFindSCX",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_LIQUIDITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "configureScarcity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLachesis",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSafetParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenBurnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenBurnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteListUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidityFindSCX",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Burn(uint256)": EventFragment;
    "Mint(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class BehodlerLite extends BaseContract {
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

  interface: BehodlerLiteInterface;

  functions: {
    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<[BigNumber]>;

    addLiquidity(
      inputToken: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    config(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        transferFee: BigNumber;
        burnFee: BigNumber;
        feeDestination: string;
      }
    >;

    configureScarcity(
      transferFee: BigNumberish,
      burnFee: BigNumberish,
      feeDestination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getConfiguration(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    setLachesis(
      l: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReceiver(
      newReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSafetParameters(
      swapPrecisionFactor: BigNumberish,
      maxLiquidityExit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenBurnable(
      token: string,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValidToken(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      inputToken: string,
      outputToken: string,
      inputAmount: BigNumberish,
      outputAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenBurnable(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whiteListUsers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    withdrawLiquidity(
      outputToken: string,
      tokensToRelease: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawLiquidityFindSCX(
      outputToken: string,
      tokensToRelease: BigNumberish,
      scx: BigNumberish,
      passes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

  addLiquidity(
    inputToken: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  config(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      transferFee: BigNumber;
      burnFee: BigNumber;
      feeDestination: string;
    }
  >;

  configureScarcity(
    transferFee: BigNumberish,
    burnFee: BigNumberish,
    feeDestination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  getConfiguration(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, string]>;

  name(overrides?: CallOverrides): Promise<string>;

  setLachesis(
    l: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReceiver(
    newReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSafetParameters(
    swapPrecisionFactor: BigNumberish,
    maxLiquidityExit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenBurnable(
    token: string,
    burnable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValidToken(
    token: string,
    valid: boolean,
    burnable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    inputToken: string,
    outputToken: string,
    inputAmount: BigNumberish,
    outputAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenBurnable(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whiteListUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  withdrawLiquidity(
    outputToken: string,
    tokensToRelease: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawLiquidityFindSCX(
    outputToken: string,
    tokensToRelease: BigNumberish,
    scx: BigNumberish,
    passes: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      inputToken: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    config(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        transferFee: BigNumber;
        burnFee: BigNumber;
        feeDestination: string;
      }
    >;

    configureScarcity(
      transferFee: BigNumberish,
      burnFee: BigNumberish,
      feeDestination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    getConfiguration(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string]>;

    name(overrides?: CallOverrides): Promise<string>;

    setLachesis(l: string, overrides?: CallOverrides): Promise<void>;

    setReceiver(newReceiver: string, overrides?: CallOverrides): Promise<void>;

    setSafetParameters(
      swapPrecisionFactor: BigNumberish,
      maxLiquidityExit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenBurnable(
      token: string,
      burnable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidToken(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      inputToken: string,
      outputToken: string,
      inputAmount: BigNumberish,
      outputAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenBurnable(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whiteListUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    withdrawLiquidity(
      outputToken: string,
      tokensToRelease: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawLiquidityFindSCX(
      outputToken: string,
      tokensToRelease: BigNumberish,
      scx: BigNumberish,
      passes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Burn(value?: null): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    Mint(
      sender?: null,
      recipient?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; recipient: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      inputToken: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    config(overrides?: CallOverrides): Promise<BigNumber>;

    configureScarcity(
      transferFee: BigNumberish,
      burnFee: BigNumberish,
      feeDestination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    setLachesis(
      l: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReceiver(
      newReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSafetParameters(
      swapPrecisionFactor: BigNumberish,
      maxLiquidityExit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenBurnable(
      token: string,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValidToken(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      inputToken: string,
      outputToken: string,
      inputAmount: BigNumberish,
      outputAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenBurnable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whiteListUsers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLiquidity(
      outputToken: string,
      tokensToRelease: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawLiquidityFindSCX(
      outputToken: string,
      tokensToRelease: BigNumberish,
      scx: BigNumberish,
      passes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidity(
      inputToken: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    configureScarcity(
      transferFee: BigNumberish,
      burnFee: BigNumberish,
      feeDestination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfiguration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLachesis(
      l: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReceiver(
      newReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSafetParameters(
      swapPrecisionFactor: BigNumberish,
      maxLiquidityExit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenBurnable(
      token: string,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValidToken(
      token: string,
      valid: boolean,
      burnable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      inputToken: string,
      outputToken: string,
      inputAmount: BigNumberish,
      outputAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenBurnable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whiteListUsers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawLiquidity(
      outputToken: string,
      tokensToRelease: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLiquidityFindSCX(
      outputToken: string,
      tokensToRelease: BigNumberish,
      scx: BigNumberish,
      passes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
