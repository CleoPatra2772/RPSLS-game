import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Login } from "../components/Login";




export default function Home() {
  return (<div>
     <Head>
        <title>RPSLS</title>
        <meta
          name="description"
          content="Good Luck!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Login />
  </div>)
}