import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";

import Image from "next/image";
import homeimg from '../assets/wolf.jpg';
import logo from '../assets/0123.png';
import {FaTwitterSquare , FaTelegram}from 'react-icons/fa';

// replace this with your contract address
const contractAddress = "0x922F435A7Dfa45f45991349958d86EF9e49f5a62";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div >

        <div className="w-full bg-black ">
       
         <div className="  mx-auto px-4">
          <div className="flex items-center py-2 justify-between">
            <Image
              src={logo}
              alt="/"
              className="h-25 w-28 ml-12 cursor-pointer "
            />
            <div className="flex justify-around gap-x-10 text-[#FFFFFF] mr-6">
              <a
                href="https://twitter.com/Sanjay33160173"
                alt=""
                className="hover:text-[#C004DE]"
              >
                <FaTwitterSquare fontSize={28} />
              </a>
              <a
                href="https://t.me/Sandy0209"
                alt=""
                className="hover:text-[#C004DE]"
              >
                <FaTelegram fontSize={28} />
              </a>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <Image src={homeimg} alt="/" className="h-full items-center" />
          </div>
          <div>
            <h1 className="text-[#FFFFFF] font-extrabold text-2xl flex sm:text-5xl my-5 py-5 justify-center"> Welcome to the Blackwolves!</h1>
            <h2 className="text-[#FFFFFF] my-5 py-5 items-center justify-center flex text-1xl font-bold">Users who own an NFT from BlackWolves collection will access exclusive content!.</h2>
            <h3 className="font-semibold my-8 flex justify-center ">
              <p className='btngrad'>
                {" "}
                <Link   href="/">
                 Exclusive Content!!!
                </Link>{" "}
                    
              </p>
            </h3>
          </div>
          <div className="w-full grid lg:grid-cols-2">
            <div className="p-10">
              <h1 className="text-[#FFFFFF] font-bold text-2xl sm:text-5xl py-5">
                 Sign In your Web3.0 wallet!
              </h1>
              
              <>
                {address ? (
                   <p className="my-3 text-[#FFFFFF]">
                     Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
                   </p>
                   ) : (
                   <p className="my-3 text-[#FFFFFF] flex justify-center">Connect your wallet!</p>
                 )} 
                 <ConnectWallet colorMode="light" />
               </>
              
             
            </div>
            <div className="">
              
              <div className="text-[#FFFFFF] text-1xl p-10">
              <h1 className="text-[#FFFFFF] font-bold text-2xl sm:text-5xl py-5 justify-center flex">
                 Claim NFT!
              </h1>
               <p className=" text-[#FFFFFF] my-3 flex justify-center"> Verify & Transact </p>
               
                <Web3Button
                    contractAddress={contractAddress}
                    action={(contract) => (contract.erc1155.claim(0, 1))}
                    //accentColor="#A196F9"
                    colorMode="light"
                >
                   Claim NFT
                </Web3Button>
              </div>
                
            </div>
          </div>
          <div className="flex flex-col  mx-auto justify-between max-w-[1240px] sm:flex-row text-center text-[#FFFFFF] border-t-8 border-[rgb(210,96,238)] px-2 py-4">
            <p className="py-4 text-[#FFFFFF]">
              {" "}
              Blackwolves © 2023. All rights reserved.
            </p>
            <div className="flex justify-around sm:w-[300px] pt-4 text-2xl ">
              <a
                href="https://twitter.com/Sanjay33160173"
                alt=""
                className="hover:text-[#C004DE]"
              >
                <FaTwitterSquare fontSize={28} />
              </a>
              <a
                href="https://t.me/Sandy0209"
                alt=""
                className="hover:text-[#C004DE]"
              >
                <FaTelegram fontSize={28} />
              </a>
            </div>
          </div>
        </div>
       </div>
      

    </div>
  );
}
