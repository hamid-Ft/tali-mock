import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 140) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        scrolled
          ? "flex justify-center items-center fixed h-[72px] top-0 w-full shadow-md  bg-[#121521cc] z-10 "
          : "flex justify-center items-center z-10"
      }>
      <div className="w-[89%] flex justify-between items-center h-[140px]">
        <div className="box-border">
          <a href="/">
            <div>
              <Image
                alt="Tali logo"
                loading="lazy"
                width="88"
                height="28"
                decoding="async"
                data-nimg="1"
                className="Navbar_clickable text-transparent"
                src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
              />
            </div>
          </a>
        </div>
        <div className="text-[14px] font-semibold text-white items-center grid grid-flow-col gap-10 max-lg:hidden">
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center font-inter">
              Product<div className="Navbar_hide"></div>
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-300  mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150 "
            />
          </a>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Pricing<div className="Navbar_hide"></div>
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </a>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              FAQ<div className="Navbar_hide"></div>
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </a>
          <Link href="/install" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Install<div className="Navbar_hide"></div>
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </Link>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Resources<div className="Navbar_hide"></div>
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </a>
          <a href="#" className="cursor-pointer">
            <div className="h-[72px] flex items-center flex-col justify-center">
              Sign In
            </div>
          </a>
          <div>
            <Image
              alt="Separator"
              loading="lazy"
              width="2"
              height="24"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/_next/static/media/separator-icon.f9732926.svg"
              className="text-transparent"
            />
          </div>
          <a href="/api/auth/login" className="cursor-pointer">
            <div
              className={
                scrolled
                  ? "Navbar_lastItem bg-grad-yellow transition-all duration-300 ease-in-out cursor-pointer text-black text-sm rounded-full py-3 px-6 hover:px-8"
                  : "Navbar_lastItem text-[#ffb40d]"
              }>
              Get Started
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <a href="/api/auth/login" className="cursor-pointer">
            <div className="text-[#ffb40d]">
              <div className="justify-center max-w-[720px]">
                <div className="text-[14px] leading-6 font-semibold">
                  Get Started
                </div>
              </div>
            </div>
          </a>
          <button className="cursor-pointer ml-5">
            <div>
              <Image
                alt="Mobile Menu"
                loading="lazy"
                width="24"
                height="16"
                decoding="async"
                data-nimg="1"
                src="https://tali.ai/_next/static/media/menu-bar.f6dec37a.svg"
                style={{ color: "transparent" }}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
