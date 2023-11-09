import Image from "next/image";

const MainInstall = () => {
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
        <p className="font-normal not-italic text-sm lg:text-base leading-[1.313rem] lg:leading-6 tracking-[-0.03em] text-white font-inter">
          <span>
            Reduce the time and effort spent on administrative tasks with the
            power of Tali&apos;s Ambient Scribe, Medical Dictation and Medical
            Search.
          </span>
        </p>
      </div>
      <div className="TitleContainer_titleIconsContainer flex mt-9 gap-32">
        <button className="TitleContainer_iconContainer flex flex-col justify-center items-center">
          <Image
            alt="desktop icon"
            loading="lazy"
            width="70"
            height="58"
            decoding="async"
            data-nimg="1"
            className="TitleContainer_desktopImg"
            src="https://tali.ai/_next/static/media/desktopIconSelected.39232e8d.svg"
            data-style="color: transparent;"
          />
          <div className="Text_container pt-4 justify-center">
            <div
              className="Text_paragraph2 TitleContainer_selectedText font-bold
        mb-1   text-[#e7e7e7]">
              For Desktop
            </div>
          </div>
          <div className="TitleContainer_selectedElement"></div>
        </button>
        <button className="TitleContainer_iconContainer flex flex-col justify-center items-center">
          <Image
            alt="mobile icon"
            loading="lazy"
            width="33"
            height="65"
            decoding="async"
            data-nimg="1"
            src="https://tali.ai/_next/static/media/mobileIcon.837381d2.svg"
            data-style="color: transparent;"
          />
          <div className="Text_container pt-4 justify-center">
            <div className="Text_darkParagraph Text_paragraph2 font-bold mb-1 text-[#e7e7e7]">
              For Mobile
            </div>
          </div>
        </button>
      </div>
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
                  data-style="color: transparent;"
                />
              </div>
              <div className="font-semibold not-italic text-xl tracking-[-0.02em] text-white">
                Tali for Google Chrome
              </div>
              <div className="font-normal not-italic text-base text-[#c4c4c7] mb-4">
                <p>
                  Download and install Tali AI directly on Google Chrome if your
                  EHR runs on web browser. Gain access to Tali directly on your
                  EHR.
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
                  data-style="color: transparent;"
                />
              </div>
              <div className="font-semibold not-italic text-xl tracking-[-0.02em] text-white">
                Tali for Windows
              </div>
              <div className="font-normal not-italic text-base text-[#c4c4c7] mb-4">
                <p>
                  Download and install Tali on your Windows PC. You can use Tali
                  AI on any EHR you can run on your windows machine.
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
    </div>
  );
};

export default MainInstall;
