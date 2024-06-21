"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";


// import { useActiveAccount } from "thirdweb/react";
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/consts/client";
// import {
//   generatePayload,
//   isLoggedIn,
//   login,
//   logout,
// } from "@/app/actions/auth";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = ["My Businesses", "Invest", "Add Business"];
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-transparent p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <img src="/images/inuaa.svg" width={48} height={48} alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <Link href="/my-businesses">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
                
              >
                {"My Businesses"}
              </p>
            </Link>
            <Link href="/#">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
                
              >
                {"Invest"}
              </p>
            </Link>
            <Link href="/#">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
                
              >
                {"Add Business"}
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-[12px] select-none">
            {/* <MainButton
              text={"Sign in"}
              classes="bg-transparent  hover:bg-transparent border-[2px] border-white rounded-[10px] font-semibold w-[96px] h-[40px]"
            /> */}
            {/* <MainButton
              text={"Login"}
              classes="primary-gradient border-gradient rounded-[10px] font-semibold w-[96px] h-[40px]"
            /> */}
            <ConnectButton
              client={client}

              // auth={{
              //   isLoggedIn: async (address) => {
              //     console.log("checking if logged in!", { address });
              //     return await isLoggedIn();
              //   },
              //   doLogin: async (params) => {
              //     console.log("logging in!");
              //     await login(params);
              //   },
              //   getLoginPayload: async ({ address }) =>
              //     generatePayload({ address }),
              //   doLogout: async () => {
              //     console.log("logging out!");
              //     await logout();
              //   },
              // }}
            />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-customDark py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-customDark py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/inuaa.svg" width={48} height={48} alt="logo" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
                color="#fff"
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <p
                  className={`hover:text-white cursor-pointer flex items-center gap-2  font-[500] text-white`}
                  key={index}
                >
                  {link}
                </p>
              ))}
              <div className="flex flex-col gap-[12px] select-none">
                {/* <MainButton
                  text={"Sign in"}
                  classes="bg-transparent hover:bg-transparent border-[2px] border-white rounded-[10px] font-semibold w-[96px] h-[40px]"
                />
                <MainButton
                  text={"Sign up"}
                  classes="primary-gradient border-gradient rounded-[10px] font-semibold w-[96px] h-[40px]"
                /> */}
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
                    getLoginPayload: async ({ address }) =>
                      generatePayload({ address }),
                    doLogout: async () => {
                      console.log("logging out!");
                      await logout();
                    },
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
