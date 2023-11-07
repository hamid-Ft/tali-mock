import Banner from "@/components/banner";
import Header from "@/components/header";
import MainOne from "@/components/mainOne";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OscarPro = () => {
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://tali.ai/profile/bg_glow_static.svg')] bg-[#121521]">
        <Header />
        <MainOne />
      </div>
      <Banner />
    </>
  );
};

export default OscarPro;
