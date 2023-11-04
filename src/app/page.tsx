import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex gap-32 max-md:gap-5 flex-col min-h-screen items-center p-24 bg-no-repeat bg-right-top bg-[url('https://tali.ai/profile/bg_glow_static.svg')] bg-[#121521] ">
        <Image
          alt="Tali logo"
          loading="lazy"
          width="188"
          height="128"
          decoding="async"
          data-nimg="1"
          className="bg-transparent "
          src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
        />
        <div className="flex items-center gap-24 max-md:flex-col max-md:gap-8 ">
          <Link
            href="/install"
            className="font-inter font-bold md:px-8 md:py-3 px-12 py-4 rounded-lg bg-[#ffffff1f] transition-all duration-300 hover:bg-[#ffb40d] hover:text-black">
            install
          </Link>
          <Link
            href="integrations/oscar-pro"
            className="font-noto font-bold px-10 py-4 md:px-8 md:py-3 rounded-lg bg-[#ffffff1f] transition-all duration-300 hover:bg-[#ffb40d] hover:text-black">
            OscarPro
          </Link>
        </div>
      </main>
    </>
  );
}
