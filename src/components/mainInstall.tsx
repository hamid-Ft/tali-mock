import Image from "next/image";
import { useState } from "react";

const MainInstall = () => {
  const [mobileContent, setMobileContent] = useState(false);

  const handleDesktopClick = () => {
    setMobileContent(false);
  };

  const handleMobileClick = () => {
    setMobileContent(true);
  };

  return (
    <div
      id="title-container"
      className="flex flex-col items-center justify-center w-full bg-center px-8 lg:px-0 pb-10 bg-[url('https://tali.ai/profile/bg_glow_static.svg')] bg-[#121521]">
      <div className="mt-8 lg:mt-[3.25rem] w-[19.438rem] lg:w-auto text-left lg:text-center">
        <h1 className="font-normal not-italic text-white font-noto text-[2.625rem] lg:text-5xl leading-[3.688rem] lg:leading-[4.188rem] tracking-[-0.03em]">
          Download and Install Tali
        </h1>
      </div>
      <div className="mt-4 w-[19.438rem] lg:w-auto text-left lg:text-center">
        <p className="font-normal max-w-2xl not-italic text-sm lg:text-base leading-[1.313rem] lg:leading-6 tracking-[-0.03em] text-white font-inter">
          <span>
            Reduce the time and effort spent on administrative tasks with the
            power of Tali&apos;s Ambient Scribe, Medical Dictation and Medical
            Search.
          </span>
        </p>
      </div>
      <div className="TitleContainer_titleIconsContainer flex mt-9 gap-32">
        <button
          onClick={handleDesktopClick}
          className="TitleContainer_iconContainer flex flex-col justify-center items-center">
          <Image
            alt="desktop icon"
            loading="lazy"
            width="70"
            height="58"
            decoding="async"
            data-nimg="1"
            className="TitleContainer_desktopImg"
            src={
              mobileContent
                ? "https://tali.ai/_next/static/media/desktopIcon.a9d5b7c1.svg"
                : "https://tali.ai/_next/static/media/desktopIconSelected.39232e8d.svg"
            }
          />
          <div className="Text_container pt-4 justify-center">
            <div
              className={
                mobileContent
                  ? "Text_paragraph2 TitleContainer_selectedText font-bold mb-1 text-[#e7e7e7] transition-all duration-200"
                  : "font-bold pb-1 text-[#ffb40d] text-sm border-b-4 border-b-[#ffb40d] transition-all duration-200"
              }>
              For Desktop
            </div>
          </div>
          <div className="TitleContainer_selectedElement"></div>
        </button>
        <button
          onClick={handleMobileClick}
          className="TitleContainer_iconContainer flex flex-col justify-center items-center">
          <Image
            alt="mobile icon"
            loading="lazy"
            width="33"
            height="65"
            decoding="async"
            data-nimg="1"
            src={
              mobileContent
                ? "https://tali.ai/_next/static/media/mobileIconSelected.2bf73503.svg"
                : "https://tali.ai/_next/static/media/mobileIcon.837381d2.svg"
            }
          />
          <div className="Text_container pt-4 justify-center">
            <div
              className={
                mobileContent
                  ? "font-bold pb-1 text-[#ffb40d] text-sm border-b-4 border-b-[#ffb40d] transition-all duration-200"
                  : "Text_darkParagraph Text_paragraph2 font-bold mb-1 text-[#e7e7e7] transition-all duration-200"
              }>
              For Mobile
            </div>
          </div>
        </button>
      </div>
      {mobileContent ? (
        <div className="flex flex-wrap items-center justify-center mt-[1.313rem] lg:mt-6 gap-x-4 gap-y-5 lg:w-[60.5rem] lg:scroll-mt-20">
          <div className="MuiBox-root css-0">
            <div className="font-inter bg-white/10 rounded-lg h-full flex flex-col justify-between p-6">
              <div>
                <div className="font-semibold not-italic text-xl tracking-[-0.02em] text-white">
                  Mobile Companion App
                </div>
                <div className="font-normal not-italic text-base text-tali-black-25 mb-4 ">
                  <p className="max-w-3xl">
                    Download Tali on your mobile device. For an enhanced
                    recording experience, you can use your mobile device to
                    transcribe notes and generate summaries. To use the mobile
                    app, you must create an account online first.
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px]">
                <a href=" https://apps.apple.com/ca/app/tali-ai/id1608561561">
                  <Image
                    alt="app store link"
                    loading="lazy"
                    width="153"
                    height="51"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/appStoreImg.7002f6a1.svg"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.taliai">
                  <Image
                    alt="google Play link"
                    loading="lazy"
                    width="173"
                    height="51"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/googlePlayImg.5793a6de.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-center mt-[1.313rem] lg:mt-6 gap-x-4 gap-y-5 lg:w-[60.5rem] lg:scroll-mt-20">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 MuiBox-root css-0">
              <div className="font-inter bg-white/10 rounded-lg h-full flex flex-col justify-between p-6">
                <div>
                  <div className="self-start w-[50px] h-[50px]">
                    <Image
                      alt=""
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.datocms-assets.com/65929/1667559553-icon.svg"
                    />
                  </div>
                  <div className="font-semibold not-italic text-xl tracking-[-0.02em] text-white">
                    Tali for Google Chrome
                  </div>
                  <div className="font-normal not-italic text-base text-[#c4c4c7] mb-4">
                    <p>
                      Download and install Tali AI directly on Google Chrome if
                      your EHR runs on web browser. Gain access to Tali directly
                      on your EHR.
                    </p>
                  </div>
                </div>
                <button className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-block px-14 py-5 w-full text-center yellow-btn text-[#c4c4c7]">
                  Download Tali Extension for Chrome
                </button>
              </div>
              <div className="font-inter bg-white/10 rounded-lg h-full flex flex-col justify-between p-6">
                <div>
                  <div className="self-start w-[50px] h-[50px]">
                    <Image
                      alt="windows logo"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.datocms-assets.com/65929/1667559684-icon-1.svg"
                    />
                  </div>
                  <div className="font-semibold not-italic text-xl tracking-[-0.02em] text-white">
                    Tali for Windows
                  </div>
                  <div className="font-normal not-italic text-base text-[#c4c4c7] mb-4">
                    <p>
                      Download and install Tali on your Windows PC. You can use
                      Tali AI on any EHR you can run on your windows machine.
                    </p>
                  </div>
                </div>
                <button className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-bl ock px-14 py-5 w-full text-center dark-purple-btn text-white">
                  Download Tali for Windows
                </button>
              </div>
            </div>
          </div>
          <button className="px-6 pt-3 mt-3 items-center justify-center w-[22.625rem] text-tali-btn not-italic text-center text-[#98729F] font-inter">
            View all download links
          </button>
        </>
      )}
    </div>
  );
};

export default MainInstall;
