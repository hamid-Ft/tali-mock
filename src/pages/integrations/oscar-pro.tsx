import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import Features from "@/components/features";
import MainOne from "@/components/mainOne";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OscarPro = () => {
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://tali.ai/profile/bg_glow_static.svg')] bg-[#121521]">
        <MainOne />
      </div>
      <Banner />
      <Features />
      <Benefits />
    </>
  );
};

export default OscarPro;
