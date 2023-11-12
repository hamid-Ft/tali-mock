import Image from "next/image";

const MainOne = () => {
  return (
    <div>
      <div className="flex justify-center items-center pb-28 pt-[4.5rem]">
        <div className="w-full grid justify-center items-center grid-cols-2 gap-16 max-w-screen-xl">
          <div>
            <div className="flex items-center justify-center max-w-2xl">
              <h1 className="text-5xl min-w-[600px] font-noto font-normal leading-[65px] text-white">
                A Voice-enabled AI Assistant tuned for Oscar Pro
              </h1>
            </div>
            <div className="pt-3 text-white">
              <div className="flex justify-center items-center max-w-2xl">
                <div className="text-[#e7e7e7] font-normal leading-6">
                  Unleash the power of Tali, the Medical Scribe, Medical Search,
                  and EHR Assistant designed to reduce physicians’
                  administrative tasks. Tali seamlessly integrates with Oscar
                  Pro EMR System to streamline your workflow.
                </div>
              </div>
              <br />
            </div>
            <div className="grid-flow-col grid pt-4 gap-3">
              <a href="#ai-scribe">
                <div className="group cursor-pointer bg-[#ffffff1a] flex gap-3 justify-center items-center p-4 rounded-lg text-white max-h-14 hover:text-[#121521] hover:bg-grad-yellow">
                  <div className=" group-hover:hidden">
                    <Image
                      alt="Medical Scribe"
                      loading="lazy"
                      width="16"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/white_microphone.877ea868.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div
                    className="hidden group-hover:block
              ">
                    <Image
                      alt="Medical Scribe"
                      loading="lazy"
                      width="16"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/black_microphone.2a235e0a.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div>Medical Scribe</div>
                </div>
              </a>
              <a href="#ehr-assistant">
                <div className="group cursor-pointer bg-[#ffffff1a] flex gap-3 justify-center items-center p-4 rounded-lg text-white max-h-14 hover:text-[#121521] hover:bg-grad-yellow">
                  <div className="group-hover:hidden">
                    <Image
                      alt="EHR Assistant"
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/whiteEHRIcon.50b448c9.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      alt="EHR Assistant"
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/blackEHRIcon.6f9c1bfb.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div>EHR Assistant</div>
                </div>
              </a>
              <a href="#medical-search">
                <div className="group cursor-pointer bg-[#ffffff1a] flex gap-3 justify-center items-center p-4 rounded-lg text-white max-h-14 hover:text-[#121521] hover:bg-grad-yellow">
                  <div className="group-hover:hidden">
                    <Image
                      alt="Medical Search"
                      loading="lazy"
                      width="16"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/glass.e9fe145e.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      alt="Medical Search"
                      loading="lazy"
                      width="16"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      src="https://tali.ai/_next/static/media/glass_black.f35c6e65.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className=" font-inter text-base font-[400]">
                    Medical Search
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className=" w-full h-full">
            <div className="flex h-full w-full">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                <div className=" h-full">
                  <div className="h-full">
                    <div className="h-full">
                      <div style={{ width: "100%", height: "100%" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                          <iframe
                            frameBorder={0}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Teaser: Medical Scribe, EHR Assistant, and Medical Search"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/e3fzdAMNmZk?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Ftali.ai&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
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
  );
};

export default MainOne;
