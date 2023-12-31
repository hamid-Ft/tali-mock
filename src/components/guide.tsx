import Image from "next/image";
import { platform } from "os";
import { useState } from "react";

enum Platform {
  Chrome = "Chrome",
  Windows = "Windows",
  Mac = "Mac",
  Mobile = "Mobile",
}

const Guide = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleButtonClick = (platform: Platform) => {
    setSelectedPlatform(platform);
  };
  const getButtonClassName = (platform: Platform) => {
    return platform === selectedPlatform
      ? "flex flex-col items-start justify-between w-[20rem] h-[9.813rem] p-6 gap-3 rounded-2xl border border-solid cursor-pointer bg-white border-white shadow-tali-uninstall-form"
      : "flex flex-col items-start justify-between w-[20rem] h-[9.813rem] p-6 gap-3 rounded-2xl border border-solid cursor-pointer bg-tali-lavendar-50 border-tali-black-25 hover:bg-white/50 ";
  };

  const renderInstructions = () => {
    switch (selectedPlatform) {
      case Platform.Chrome:
        return (
          <div className="flex flex-col scroll-mt-48">
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  1
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 1
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Install the extension
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    To install Tali Chrome extension, follow the link provided
                    on the top of this page to the Google Extension Store. Click
                    on <strong>Add to chrome</strong> button, and click{" "}
                    <strong>Add extension</strong> on the prompt. Tali then will
                    be downloaded and installed automatically.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674010412-chrome-1.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  2
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 2
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Create (or log into) your Tali account
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Once Tali is installed, a widget with a login button will
                    appear in the right hand of your screen. If you don&apos;t
                    see the widget simply refresh the page.
                  </p>

                  <p>
                    <br />
                    Click <strong>Log into Tali</strong> on the widget and
                    you’ll be able to create an account with your email, Google
                    or Apple account. If you already have a Tali account,
                    proceeding with any of these will just log you into your
                    account.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674011616-chrome-2.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  3
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 3
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Grant microphone permission
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Tali is a voice-enabled virtual assistant, so it requires
                    microphone access to be able to work. The first time you try
                    to use Tali on a new website, you will have to grant
                    microphone access.
                  </p>

                  <p>
                    <br />
                    Select any text area within a webpage (like the
                    patient&apos;s E-chart on your EHR). Once the text area has
                    been selected, the microphone icon in the widget will turn
                    green. Click the <strong>green microphone</strong> and see a
                    popup appear in the upper left corner of the browser. Click{" "}
                    <strong>Allow</strong> to grant the extension permission to
                    access your microphone.
                  </p>

                  <p>
                    <br />
                    You can change this permission by clickin on the{" "}
                    <strong>lock</strong> icon located to the left of a
                    webpage&apos;s url in Chrome&apos;s address bar.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674011409-chrome-3.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  4
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  You are done!
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Start using Tali
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Congrats! Start using saving time and effort by using Tali
                    in your practice. With Tali,{" "}
                    <strong>
                      physicians are saving up to three hours a week
                    </strong>{" "}
                    on documentation, day to day navigation of their EHR, and
                    their access to evidence-based medical information.
                  </p>

                  <p>
                    <br />
                    It is <strong>free</strong> to start, and you can get
                    unlimited access with a{" "}
                    <a href="https://tali.ai/pricing">premium subscription</a>.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start Using Tali on Mac - 4"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1684337069-frame-30591.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case Platform.Windows:
        return (
          <div className="flex flex-col scroll-mt-48">
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  1
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 1
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Download Windows installation file
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    To install Tali Windows app, follow the link provided on the
                    top of this page. A file will be automatically downloaded to
                    you computer. If the download didn&apos;t start
                    automatically, refresh the page and try again.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali windows app"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1674061354-win-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  2
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 2
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Run the installer
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Locate the downloaded file on your computer and run the
                    installation. The file is most likely located in your{" "}
                    <strong>downloads folder</strong>. Simply follow on-screen
                    instructions to proceed with the installation.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali windows app"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1674061233-win-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  3
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 3
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Grant microphone permission
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Tali is a voice-enabled virtual assistant, so it requires
                    microphone access to be able to work. The first time you try
                    to use Tali, you will have to grant microphone access.
                  </p>

                  <p>
                    <br />A notification pop up will appear on the bottom right
                    of your screen, press the <strong>Grant Access</strong>{" "}
                    button.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali windows app"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1674061257-win-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  4
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  You are done!
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Start using Tali
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Congrats! Start using saving time and effort by using Tali
                    in your practice. With Tali,{" "}
                    <strong>
                      physicians are saving up to three hours a week
                    </strong>{" "}
                    on documentaiton, and their access to evidence-based medical
                    information.
                  </p>

                  <p>
                    <br />
                    It is <strong>free</strong> to start, and you can get
                    unlimited access with a{" "}
                    <a href="https://tali.ai/pricing">premium subscription</a>.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali windows app"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1684411008-frame-30592.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case Platform.Mac:
        return (
          <div className="flex flex-col scroll-mt-48">
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  1
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 1
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Download the Mac installation file
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    To install Tali Mac app, follow the link provided on the top
                    of this page. A file will be automatically downloaded to you
                    computer. If the download didn&apos;t start automatically,
                    refresh the page and try again.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start Using Tali on Mac"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1684336960-frame-30587.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  2
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 2
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Run the Downloaded Zip File
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Locate the downloaded file on your computer. The file is
                    most likely located in your downloads folder. Simply unzip
                    the file and move the application to the applications
                    folder.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start Using Tali on Mac - 2"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1684337014-frame-30588.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  3
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 3
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Grant Access to the Microphone and Accessibility features
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Through your{" "}
                    <strong>System Settings &gt; Privacy &amp; Security</strong>
                    , grant access to the <strong>Microphone</strong> and{" "}
                    <strong>Accessibility</strong> features.{" "}
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start Using Tali on Mac - 3"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1684337036-frame-30589.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  4
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  You are done!
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Start using Tali
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Congrats! Start using saving time and effort by using Tali
                    in your practice. With Tali,{" "}
                    <strong>
                      physicians are saving time on every patient visit
                    </strong>
                    .
                  </p>

                  <p>
                    It is free to start, and you can get unlimited access with a
                    subscription.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali windows app"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    data-style="color:transparent"
                    src="https://www.datocms-assets.com/65929/1684411008-frame-30592.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case Platform.Mobile:
        return (
          <div className="flex flex-col scroll-mt-48">
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  1
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  step 1
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Install the Mobile App
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Use the QR code below to find the mobile app in your
                    device’s app store.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Download Links to Tali Android and iOS mobile applications"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1696255588-frame-632731.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  2
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  step 2
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Log in to Tali account
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Log into your Tali account, using the same email address you
                    used when creating the account on your computer.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="login step"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1695992050-login.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  3
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  step 3
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Enable Microphone Permissions
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    When prompted to do so, click ‘OK’ to allow Tali to use your
                    device&apos;s microphone.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Grand Microphone access"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1696255627-frame-632722.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  4
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  step 4
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Record Patient Visits
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Use the mobile app to record a patient visit, clicking
                    ‘Done’ when the visit is over.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="record patient visit"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1695992094-recordpatient.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  5
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  final step
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Paste the Note into Your EHR
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Log into Tali on your computer to paste the note into your
                    EHR.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="paste note into EHR"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1695992133-pastenote.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col scroll-mt-48">
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  1
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 1
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Install the extension
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    To install Tali Chrome extension, follow the link provided
                    on the top of this page to the Google Extension Store. Click
                    on <strong>Add to chrome</strong> button, and click{" "}
                    <strong>Add extension</strong> on the prompt. Tali then will
                    be downloaded and installed automatically.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674010412-chrome-1.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  2
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 2
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Create (or log into) your Tali account
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Once Tali is installed, a widget with a login button will
                    appear in the right hand of your screen. If you don&apos;t
                    see the widget simply refresh the page.
                  </p>

                  <p>
                    <br />
                    Click <strong>Log into Tali</strong> on the widget and
                    you’ll be able to create an account with your email, Google
                    or Apple account. If you already have a Tali account,
                    proceeding with any of these will just log you into your
                    account.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674011616-chrome-2.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  3
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  Step 3
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Grant microphone permission
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Tali is a voice-enabled virtual assistant, so it requires
                    microphone access to be able to work. The first time you try
                    to use Tali on a new website, you will have to grant
                    microphone access.
                  </p>

                  <p>
                    <br />
                    Select any text area within a webpage (like the
                    patient&apos;s E-chart on your EHR). Once the text area has
                    been selected, the microphone icon in the widget will turn
                    green. Click the <strong>green microphone</strong> and see a
                    popup appear in the upper left corner of the browser. Click{" "}
                    <strong>Allow</strong> to grant the extension permission to
                    access your microphone.
                  </p>

                  <p>
                    <br />
                    You can change this permission by clickin on the{" "}
                    <strong>lock</strong> icon located to the left of a
                    webpage&apos;s url in Chrome&apos;s address bar.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start using Tali extension"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1674011409-chrome-3.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div className="group flex flex-row gap-8">
              <div className="flex flex-col">
                <div className="circle-gradient-number w-14 h-14 text-center inline-block pt-3 text-tali-black font-semibold not-italic text-xl tracking-[-0.02em] font-inter">
                  4
                </div>
                <div className="flex justify-center h-[calc(100%-3.5rem)] w-full">
                  <div className="bg-[#A35FCC] w-[0.125rem] h-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-tali-black font-normal not-italic text-base font-inter mt-[0.125rem]">
                  You are done!
                </div>
                <div className="text-tali-black font-semibold not-italic text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] font-inter">
                  Start using Tali
                </div>
                <div className="text-tali-black text-base not-italic font-normal font-inter w-[33.75rem] mt-4">
                  <p>
                    Congrats! Start using saving time and effort by using Tali
                    in your practice. With Tali,{" "}
                    <strong>
                      physicians are saving up to three hours a week
                    </strong>{" "}
                    on documentation, day to day navigation of their EHR, and
                    their access to evidence-based medical information.
                  </p>

                  <p>
                    <br />
                    It is <strong>free</strong> to start, and you can get
                    unlimited access with a{" "}
                    <a href="https://tali.ai/pricing">premium subscription</a>.
                  </p>
                </div>
                <div className="mt-8 mb-24 group-last:mb-0 w-[33.75rem]">
                  <Image
                    alt="Start Using Tali on Mac - 4"
                    loading="lazy"
                    width="540"
                    height="298"
                    decoding="async"
                    data-nimg="1"
                    src="https://www.datocms-assets.com/65929/1684337069-frame-30591.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-tali-lavendar-50 w-full flex flex-col justify-center items-center px-8 desktop:px-0">
      <h2 className="mt-[4.5rem] desktop:mt-24 w-[22.438rem] desktop:w-auto not-italic font-noto-serif text-tali-black text-tali-h2-mobile  desktop:text-tali-h2 text-center desktop:text-center">
        Quick Installation Guide
      </h2>
      <div className="hidden lg:flex lg:flex-col">
        <h2 className="mt-[4.5rem] lg:mt-24 w-[22.438rem] lg:w-auto not-italic font-noto-serif text-tali-black text-tali-h2-mobile  lg:text-tali-h2 text-center lg:text-center">
          To Use Tali Follow These Steps
        </h2>
        <div className="flex flex-row gap-14 mt-12">
          <div className="sticky top-24 flex flex-col gap-3 items-start h-[30.938rem] w-80">
            <div
              onClick={() => handleButtonClick(Platform.Chrome)}
              className={getButtonClassName(Platform.Chrome)}>
              <div className="mb-2">
                <Image
                  alt=""
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  src="https://www.datocms-assets.com/65929/1667559553-icon.svg"
                  data-style="color: transparent;"
                />
              </div>
              <div className="flex flex-row w-full font-semibold not-italic text-xl tracking-[-0.02em] text-white font-inter justify-between">
                <div className="flex flex-col">
                  <div className="text-sm leading-[1.375rem] text-tali-purple">
                    Getting Started on
                  </div>
                  <div className="text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                    Chrome Extension
                  </div>
                </div>
                <div className="self-center text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                  <Image
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/arrowBtn.efffb8c9.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => handleButtonClick(Platform.Windows)}
              className={getButtonClassName(Platform.Windows)}>
              <div className="mb-2">
                <Image
                  alt="windows logo"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  src="https://www.datocms-assets.com/65929/1667559684-icon-1.svg"
                  data-style="color: transparent;"
                />
              </div>
              <div className="flex flex-row w-full font-semibold not-italic text-xl tracking-[-0.02em] text-white font-inter justify-between">
                <div className="flex flex-col">
                  <div className="text-sm leading-[1.375rem] text-tali-black-50">
                    Getting Started on
                  </div>
                  <div className="text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                    Windows PC
                  </div>
                </div>
                <div className="self-center text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                  <Image
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/arrowBtn.efffb8c9.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => handleButtonClick(Platform.Mac)}
              className={getButtonClassName(Platform.Mac)}>
              <div className="mb-2">
                <Image
                  alt=""
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  src="https://www.datocms-assets.com/65929/1668178180-icon-4.svg"
                  data-style="color: transparent;"
                />
              </div>
              <div className="flex flex-row w-full font-semibold not-italic text-xl tracking-[-0.02em] text-white font-inter justify-between">
                <div className="flex flex-col">
                  <div className="text-sm leading-[1.375rem] text-tali-black-50">
                    Getting Started on
                  </div>
                  <div className="text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                    Mac{" "}
                  </div>
                </div>
                <div className="self-center text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                  <Image
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/arrowBtn.efffb8c9.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => handleButtonClick(Platform.Mobile)}
              className={getButtonClassName(Platform.Mobile)}>
              <div className="mb-2">
                <Image
                  alt=""
                  loading="lazy"
                  width="100"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  src="https://www.datocms-assets.com/65929/1696255574-icons.svg"
                  data-style="color: transparent;"
                />
              </div>
              <div className="flex flex-row w-full font-semibold not-italic text-xl tracking-[-0.02em] text-white font-inter justify-between">
                <div className="flex flex-col">
                  <div className="text-sm leading-[1.375rem] text-tali-black-50">
                    Getting Started on
                  </div>
                  <div className="text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                    Mobile
                  </div>
                </div>
                <div className="self-center text-tali-black text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] text-left">
                  <Image
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/arrowBtn.efffb8c9.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </div>
            </div>
          </div>
          {renderInstructions()}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mb-[8.75rem] desktop:mb-60">
        <div className="text-[#373737] font-normal not-italic text-sm desktop:text-base leading-[1.313rem] desktop:leading-[1.563rem] font-inter mt-[4.5rem] desktop:mt-24">
          Need more help?
        </div>
        <a
          className="flex flex-row w-[19.438rem] desktop:w-auto py-[0.813rem] px-10 justify-center items-center gap-2 tali-btn bg-tali-dark-purple rounded-[2rem]"
          href="https://docs.google.com/document/d/15Lje41-pjkCpLGEgXq_f7wXz0z7Uiwx1cD7m7JSfxAo/export?format=pdf"
          target="__blank"
          download="">
          <Image
            alt=""
            loading="lazy"
            width="30"
            height="30"
            decoding="async"
            data-nimg="1"
            src="https://tali.ai/_next/static/media/download.029af18d.svg"
            data-style="color: transparent;"
          />
          <span className="text-white not-italic text-tali-btn font-normal font-inter">
            Download Tali tutorial
          </span>
        </a>
      </div>
    </div>
  );
};

export default Guide;
