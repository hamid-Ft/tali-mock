import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import Features from "@/components/features";
import MainOne from "@/components/mainOne";
import Head from "next/head";
import React from "react";

const OscarPro = () => {
  return (
    <>
      <Head>
        <title>Oscar-pro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MainOne />
      </div>
      <Banner />
      <Features />
      <Benefits />
    </>
  );
};

export default OscarPro;
