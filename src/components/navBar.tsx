import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
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
    <header className="flex items-center justify-center">
      <div className="w-[89%] flex justify-between items-center h-[72px] pt-14">
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
                className="text-transparent"
                src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
              />
            </div>
          </a>
        </div>
        <div className="text-[14px] font-semibold text-white items-center grid grid-flow-col gap-10 max-lg:hidden">
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center font-inter">
              Product
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-300  mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150 "
            />
          </a>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Pricing
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </a>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              FAQ
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </a>
          <Link href="/install" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Install
            </div>
            <div
              className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
            />
          </Link>
          <a href="#" className="group relative">
            <div className=" flex items-center flex-col justify-center">
              Resources
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
            <div className="Navbar_lastItem text-[#ffb40d]">Get Started</div>
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
      {scrolled && (
        <div className="w-full px-16 flex justify-between items-center h-[72px] fixed z-10 bg-[#121521cc] backdrop-blur">
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
                  className="text-transparent"
                  src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
                />
              </div>
            </a>
          </div>
          <div className="text-[14px] font-semibold text-white items-center grid grid-flow-col gap-10 max-lg:hidden">
            <a href="#" className="group relative">
              <div className=" flex items-center flex-col justify-center font-inter">
                Product
              </div>
              <div
                className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-300  mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150 "
              />
            </a>
            <a href="#" className="group relative">
              <div className=" flex items-center flex-col justify-center">
                Pricing
              </div>
              <div
                className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
              />
            </a>
            <a href="#" className="group relative">
              <div className=" flex items-center flex-col justify-center">
                FAQ
              </div>
              <div
                className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
              />
            </a>
            <Link href="/install" className="group relative">
              <div className=" flex items-center flex-col justify-center">
                Install
              </div>
              <div
                className="absolute inset-x-0 h-1 bg-yellow-500  rounded duration-200 mt-1
           transform scale-x-0 origin-center transition-transform group-hover:scale-x-150"
              />
            </Link>
            <a href="#" className="group relative">
              <div className=" flex items-center flex-col justify-center">
                Resources
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
              <div className="Navbar_lastItem bg-grad-yellow transition-all duration-300 ease-in-out cursor-pointer text-black text-sm rounded-full py-3 px-6 hover:px-8">
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
      )}
    </header>
  );
};

export default NavBar;
