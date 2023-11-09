const Banner = () => {
  return (
    <div className="FullWidthBanner_pageFullBanner  w-full bg-white py-14 ">
      <div
        className="FullWidthBanner_bannerInner FullWidthBanner_bannerInnerLimitedWidth max-w-xl
       flex m-auto justify-center items-center">
        <div className="FullWidthBanner_bannerText text-xl font-semibold text-black">
          Say goodbye to manual data entry and hello to increased productivity
          with Tali.
        </div>
        <a
          className="FullWidthBanner_bannerButton text-[#121521] text-center transition-all text-sm leading-6 bg-grad-yellow cursor-pointer py-5 px-9 rounded-[32px] shadow-[0_10px_20px_rgba(136,63,133,.15)] font-bold whitespace-nowrap hover:shadow-[0_10px_40px_0_rgba(255,180,13,.7)] hover:-translate-y-1 ease-[cubic-bezier(.18,.89,.32,1.28)]"
          href="#">
          Try Tali
        </a>
      </div>
    </div>
  );
};

export default Banner;
