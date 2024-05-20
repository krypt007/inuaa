import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
// import { stakingABI } from "./stakingABI";

const workerContractAddress = "<contract_address>";
const tokenContractAddress = "<contract_address>";
const businessContractAddress = "<contract_address>";
const stakingContractAddress = "<contract_address>";
const accountFactoryContractAddress = "0xF18E6b5f8ba1C1Aef68b0DBD7eDaae6A538915e8";


// export const STAKING_CONTRACT = getContract({
//     client: client,
//     chain: chain,
//     address: stakingContractAddress,
//     abi: stakingABI
// });


export const WORKER_CONTRACT_ADDRESS = getContract({
    client: client,
    chain: chain,
    address: workerContractAddress
});
export const TOKEN_CONTRACT_ADDRESS = getContract({
    client: client,
    chain: chain,
    address: tokenContractAddress
});
export const BUSINESSES_CONTRACT_ADDRESS = getContract({
    client: client,
    chain: chain,
    address: businessContractAddress
});
export const STAKING_CONTRACT_ADDRESS = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress
});

export const ACCOUNT_FACTORY_CONTRACT_ADDRESS = getContract({
    client: client,
    chain: chain,
    address: accountFactoryContractAddress
});