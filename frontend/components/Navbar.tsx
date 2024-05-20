"use client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { approve, balanceOf } from "thirdweb/extensions/erc20";
import { prepareContractCall, toEther, toWei } from "thirdweb";
import {client} from "@/app/client";
import { chain } from "@/app/chain";
import { TOKEN_CONTRACT_ADDRESS } from "../src/constants/contracts";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
    // Get the user's Account
    const account = useActiveAccount();

    // Get instance of the token contract
    // Get the user's token balance with account
    const { data: tokenBalance, isLoading: loadingTokenBalance, refetch: refetchTokenBalance } = useReadContract(
        balanceOf,
        {
            contract: TOKEN_CONTRACT_ADDRESS,
            address: account?.address || "",
            queryOptions: {
                enabled: !!account,
            }
        }
    );

    // Truncate the number to 6 decimal places
    const truncateNumber = (num: string) => {
        return num.slice(0, 6);
    }

    function truncate(value: string | number, decimalPlaces: number): number {
        const numericValue: number = Number(value);
        if (isNaN(numericValue)) {
            throw new Error('Invalid input: value must be a convertible to a number.');
        }
        const factor: number = Math.pow(10, decimalPlaces);
        return Math.trunc(numericValue * factor) / factor;
    }

    return (
        <div className={styles.navbarContainer}>
            {account && (
                <>
                    <h1>INUAA</h1>
                    <div className={styles.navbarOptions}>
                        <Link href="/">
                            <p>Businesses</p>
                        </Link>
                        <Link href="/shop">
                            <p>Shop</p>
                        </Link>
                    </div>
                    <div className={styles.navbarOptions}>
                        {tokenBalance && (
                            <p>{truncate(toEther(tokenBalance!),2)} </p>
                        )}
                        {loadingTokenBalance ? (
                            <p>Loading...</p>
                        ) : (
                            <p style={{
                                padding: "10px",
                                borderRadius: "5px",
                                marginRight: "5px",
                            }}>Token: {truncate(toEther(tokenBalance!),2)}</p>
                        )}
                        <ConnectButton client={client} chain={chain} connectButton={{label: "Login"}} />
                    </div>
                </>
            )}
        </div>
    )
};

export default Navbar;