"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
    inAppWallet(),

]

const accountAbstraction = {
    chain: chain,
    factoryAddress: "0xF18E6b5f8ba1C1Aef68b0DBD7eDaae6A538915e8",
    gassless: true,
}


export const AALogin = () => {
    return(
        ConnectButton 
            client={client},
            chain={chain},
            wallets=wallets,
            accountAbstraction=accountAbstraction,
            ConnectButton: ({
                label: "Inuaa Login"
            })
        />
    )
};