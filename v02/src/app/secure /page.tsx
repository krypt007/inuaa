import { redirect } from "next/navigation";
import { isLoggedIn } from "@/actions/auth";

import { PayEmbed } from "thirdweb/react";
import { client } from "@/_lib/client";


const AuthenticatedPage = async () => {
  // redirect back if user is not logged in
   if(!await isLoggedIn()){
    redirect("/")
   }

  return (
    <div>
      <h1>Logged In Page</h1>
      <p>You are logged in, so you can see this page!</p>
      <PayEmbed client={client} />
    </div>
  );
};

export default AuthenticatedPage;
 
