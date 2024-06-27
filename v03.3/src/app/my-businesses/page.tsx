import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/my_business_sections/HeroSection";

import { cookies } from "next/headers";
import { thirdwebAuth } from "../consts/thirdwebAuth";
import { hasAccess } from "../actions/gate-condition";
import { GatedContent } from "./GatedContent";

import { useActiveAccount } from "thirdweb/react";

import { redirect } from "next/navigation";
// import { isLoggedIn } from "@/app/actions/auth";
// import { authedOnly } from "@/app/actions/auth";

export default async function MyBusinesses() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return <MustLogin />;
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  console.log({ authResult });
  if (!authResult.valid) {    return <MustLogin />;  }

  // If the user has logged in, get their wallet address
  const address = authResult.parsedJWT.sub;
  console.log({ paredResult: authResult.parsedJWT });
  if (!address) throw new Error("could not get wallet address");

  // This is the part that we do the gating condition.
  // If pass -> Allow them to access the page.
  // const _hasAccess = await hasAccess(address);
  // if (!_hasAccess) return <NotAllowed />;

  // Finally! We can load the gated content for them now
  return (
    <main className="bg-customDark">
      <NavBar />
      <HeroSection />
      
      <GatedContent />

      <FooterSection />
    </main>
  );
}

const MustLogin = () => (
  <div className="text-center">
    You are not logged in. <br />
    <a href="/" className="underline">
      Log in now
    </a>
  </div>
);

const reason = "you do not own any NFT"; // replace this with your own reason

const NotAllowed = () => (
  <div className="text-center">
    You are logged in but you do not have access to this page because {reason}
  </div>
);
