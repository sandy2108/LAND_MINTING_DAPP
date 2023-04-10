import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import remind from "./remind";
import { useRouter } from "next/router";
import Image from "next/image";
import premium from '../assets/premium.jpg';

import premium1 from '../assets/premium.jpg';

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className='w-full px-4 mx-auto sm:h-full  bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className="">
        <div className="h-[80px] flex justify-center">
          <h1 className='text-black font-extrabold text-2xl  my-5'>Welcome to Blackwolves!</h1>
        </div>
        
             <div className="flex justify-center text-[#FFFFFF] text-2xl sm:text-2xl font-bold">
               Welcome to the BlackWolves Real Estate DAO!

             </div>
             <div className="flex justify-center text-[#FFFFFF] text-2xl sm:text-2xl font-bold">
               you are the placeholder of this DAO. so you can vote on our future proposals. 
             </div>
             <div className="flex justify-center my-5 w-30 h-50">
               <Image
                 src={premium1}
                 alt=''
                 className="flex bg-cover sm:h-22 sm:w-30"      
               />
             </div>
            <div className="text-[#FFFFFF] flex justify-center text-1xl sm:text-2xl font-bold px-10">
            Blackwolves is a group of three guys with the mission to implement NFT-based user authentication in Web 3.0 decentralized applications (Dapps).
            </div>
            <div className="flex justify-center">
              <button className="btn-grad" onClick={logout}>
                Logout
              </button>
            </div>
      
      </div>
      
    </div>
  );
}


export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }


  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }


  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    "mumbai"
  );


  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    
    return {
      
      redirect: {
        destination: "/remind",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
