import Guide from "@/components/guide";
import MainInstall from "@/components/mainInstall";
import Head from "next/head";
import Image from "next/image";

export default function Install() {
  return (
    <>
      <Head>
        <title>Install</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainInstall />
      <div className="flex flex-col lg:flex-row font-inter gap-[1.313rem] lg:gap-0 p-10 lg:p-0 justify-center items-center w-full bg-white">
        <div className="text-tali-black not-italic font-semibold text-[1.3rem] leading-[1.688rem] tracking-[-0.02em] py-0 lg:py-14 w-[18.438rem] lg:w-[28.107rem]">
          <p>Need help getting Tali AI up and running?</p>

          <p>Book a free online consult.</p>
        </div>
        <a
          id="book-now"
          tali-btn="true"
          className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-block px-14 py-5 text-center white-btn undefined tali-btn"
          href="https://calendly.com/help-tali-ai/30min?utm_source=Website&amp;utm_source=Install&amp;utm_source=BookNow">
          Book now
        </a>
      </div>
      <Guide />
    </>
  );
}
