import Link from "next/link";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="flex min-h-screen items-center justify-evenly p-24 bg-no-repeat bg-right-top bg-[url('https://tali.ai/profile/bg_glow_static.svg')] bg-[#121521] ">
        <Link
          href="/install"
          className="font-inter font-bold px-10 py-4 rounded-lg bg-[#ffffff1f] transition-all duration-300 hover:bg-[#ffb40d] hover:text-black">
          install
        </Link>
        <Link
          href="integrations/oscar-pro"
          className="font-noto font-bold px-10 py-4 rounded-lg bg-[#ffffff1f] transition-all duration-300 hover:bg-[#ffb40d] hover:text-black">
          OscarPro
        </Link>
      </main>
    </>
  );
}
