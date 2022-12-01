import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Login } from "../components/Login";
import { Loading } from "../components/Loading";
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";




export default function Home() {
  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.CONTRACT_ADDRESS);

  
  if (!address) return <Login />
  if (isLoading) return <Loading />
  

  return (<div>
     <Head>
        <title>RPSLS</title>
        <meta
          name="description"
          content="Good Luck!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
       
  </div>)
}