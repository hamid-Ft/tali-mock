import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OscarPro = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat bg-center "
      style={{
        background: "url(https://tali.ai/profile/bg_glow_static.svg),#121521",
      }}>
      <div
        className="sticky top-0 z-50 flex flex-col justify-center items-center
      ">
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
                  className="Navbar_clickable"
                  src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
          </div>
          <div className="text-[14px] font-semibold text-white items-center grid grid-flow-col gap-10 max-lg:hidden">
            <a href="#">
              <div className="h-[72px] flex items-center flex-col justify-center font-noto">
                Product<div className="Navbar_hide"></div>
              </div>
            </a>
            <a href="#">
              <div className="h-[72px] flex items-center flex-col justify-center">
                Pricing<div className="Navbar_hide"></div>
              </div>
            </a>
            <a href="#">
              <div className="h-[72px] flex items-center flex-col justify-center">
                FAQ<div className="Navbar_hide"></div>
              </div>
            </a>
            <Link href="/install">
              <div className="h-[72px] flex items-center flex-col justify-center">
                Install<div className="Navbar_hide"></div>
              </div>
            </Link>
            <a href="#">
              <div className="h-[72px] flex items-center flex-col justify-center">
                Resources<div className="Navbar_hide"></div>
              </div>
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
              <div className="Navbar_lastItem">Get Started</div>
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
      </div>
      <div>
        <div
          id="title-container"
          className="HeroSection_titleContainer flex justify-center items-center pb-28 pt-[4.5rem]">
          <div className="HeroSection_titleBlock w-full grid justify-center items-center grid-cols-2 gap-16 max-w-screen-xl">
            <div className="HeroSection_titleTextWrapper ">
              <div className="Text_container HeroSection_titleText flex items-center justify-center max-w-3xl">
                <h1 className="Text_darkHeader Text_titleH1 text-4xl min-w-[600px]">
                  A Voice-enabled AI Assistant tuned for Oscar Pro
                </h1>
              </div>
              <div className="HeroSection_titleBodyContainer pt-3 text-white">
                <div className="Text_container flex justify-center max-w-3xl">
                  <div className="Text_darkParagraph Text_paragraph1 text-[#e7e7e7] font-normal leading-6">
                    Unleash the power of Tali, the Medical Scribe, Medical
                    Search, and EHR Assistant designed to reduce physicians’
                    administrative tasks. Tali seamlessly integrates with Oscar
                    Pro EMR System to streamline your workflow.
                  </div>
                </div>
                <br />
              </div>
              <div className="HeroSection_featureCardContainer grid-flow-col grid pt-4 gap-3">
                <a href="#ai-scribe">
                  <div className="FeatureCard_featureCard cursor-pointer bg-[#ffffff1a] flex gap-3 justify-center items-center p-4 rounded-lg text-white max-h-14">
                    <div className="FeatureCard_cardDefault">
                      <Image
                        alt="Medical Scribe"
                        loading="lazy"
                        width="16"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/white_microphone.877ea868.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardHover hidden hover:block">
                      <Image
                        alt="Medical Scribe"
                        loading="lazy"
                        width="16"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/black_microphone.2a235e0a.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardText">Medical Scribe</div>
                  </div>
                </a>
                <a href="#ehr-assistant">
                  <div className="FeatureCard_featureCard">
                    <div className="FeatureCard_cardDefault">
                      <Image
                        alt="EHR Assistant"
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/whiteEHRIcon.50b448c9.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardHover">
                      <Image
                        alt="EHR Assistant"
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/blackEHRIcon.6f9c1bfb.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardText">EHR Assistant</div>
                  </div>
                </a>
                <a href="#medical-search">
                  <div className="FeatureCard_featureCard">
                    <div className="FeatureCard_cardDefault">
                      <Image
                        alt="Medical Search"
                        loading="lazy"
                        width="16"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/glass.e9fe145e.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardHover">
                      <Image
                        alt="Medical Search"
                        loading="lazy"
                        width="16"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        src="https://tali.ai/_next/static/media/glass_black.f35c6e65.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="FeatureCard_cardText">Medical Search</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="HeroSection_videoWrapper">
              <div className="VideoPlaylist_playListContainer VideoPlaylist_withWithoutItem">
                <div className="VideoPlaylist_videoPlayer VideoPlaylist_withWithoutItem VideoPlaylist_videPlayerBorderRadius">
                  <div className="VideoPlaylist_wideVideoContainer">
                    <div>
                      <div>
                        <div style={{ width: "100%", height: "100%" }}>
                          <div style={{ width: "100%", height: "100%" }}>
                            <iframe
                              frameBorder={0}
                              allowFullScreen={true}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              title="Teaser: Medical Scribe, EHR Assistant, and Medical Search"
                              width="100%"
                              height="100%"
                              src="https://www.youtue.com/embed/e3fzdAMNmZk?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Ftali.ai&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                              id="widget2"></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OscarPro;
