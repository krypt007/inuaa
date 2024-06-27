import { MediaRenderer, useActiveAccount } from "thirdweb/react";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { getBalance } from "thirdweb/extensions/erc20";

import styles from "../styles/Home.module.css";
import { TOKEN_CONTRACT_ADDRESS, WORKER_CONTRACT_ADDRESS } from "@/app/consts/contracts";
import {client} from "@/app/consts/client";
import { defineChain } from "thirdweb";
 
import { bscTestnet } from "thirdweb/chains";
import { getContract } from "thirdweb";
 
const myChain = defineChain(bscTestnet);

const Worker = async () => {
    // Get the user's address to get the owned workers
    const address = useActiveAccount();

    // Get the worker contract instance
    // Get the user's owned worker NFTs
    // const { contract: workerContract } = useContract(WORKER_CONTRACT_ADDRESS);
    const  workerContract  = getContract({
        client,
        chain: myChain,
        address: WORKER_CONTRACT_ADDRESS,
    });
    // const { data: ownedWorkers, isLoading: loadingWorker } = getOwnedNFTs(workerContract, address);
    const ownedNFTs = await getOwnedNFTs({
        contract: workerContract,
        owner: `${address}`,
      });

    // Get the token contract instance
    // Get the user's token balance with address
    const tokenContract = getContract({
        client,
        chain: myChain,
        address: TOKEN_CONTRACT_ADDRESS,
    });
    const tokenBalance = getBalance({ contract: tokenContract, address: `${address}` });

    // Truncate the number to 6 decimal places
    const truncateNumber = (num: string) => {
        return num.slice(0, 6);
    }

    return (
        <div style={{ width: "50%"}}>
            {/* {!loadingWorker ? (
                ownedWorkers && ownedWorkers.length > 0 && (
                    ownedWorkers.map((worker) => (
                        <div className={styles.workerContainer} key={worker.metadata.id}>
                            <div>
                                <h2>Worker Stats:</h2>
                                <MediaRenderer 
                                    key={worker.metadata.id}
                                    src={worker.metadata.image}
                                    style={{ borderRadius: "10px", margin: "10px 0px" }}
                                />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold"}}>{worker.metadata.name} - ID: #{worker.metadata.id}</p>
                                {tokenBalance && (
                                    <p>Balance: {truncateNumber(tokenBalance?.displayValue as string)} {tokenBalance?.symbol}</p>
                                )}
                            </div>
                        </div>
                    ))
                )
            ) : (
                <p>Loading worker...</p>
            )} */}
        </div>
    )
};

export default Worker;