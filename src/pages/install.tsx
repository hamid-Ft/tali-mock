import Head from "next/head";
import Link from "next/link";

export default function Install() {
  return (
    <>
      <Head>
        <title>Install</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h2 className="text-red-600 font-noto font-extrabold">install</h2>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}
