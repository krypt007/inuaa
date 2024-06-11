"use client";
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/_lib/client";
import { generatePayload, isLoggedIn, login, logout } from "@/actions/auth";
import { accountAbstraction, editionDropTokenId } from "@/_constants";

import { PayEmbed } from "thirdweb/react";


const ConnectButtonPage: NextPage = () => {
  return (
    <>
      <div className="text-white">Plate Palate Onboarding Form</div>
      <div className="flex flex-col justify-between">        
        <ConnectButton
          client={client}
          auth={{
            isLoggedIn: async (address) => {
              console.log("checking if logged in!", { address });
              return await isLoggedIn();
            },
            doLogin: async (params) => {
              console.log("logging in!");
              await login(params);
            },
            getLoginPayload: async ({ address }) => generatePayload({ address }),
            doLogout: async () => {
              console.log("logging out!");
              await logout();
            },
          }}
          accountAbstraction={accountAbstraction}
          connectModal={{
            size: "compact",
          }}
      />
      <div>
        <PayEmbed client={client} />
      </div>
      </div>
    </>
  );
};

export default ConnectButtonPage;