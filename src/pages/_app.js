import "../styles/globals.css";
import { Inter, Noto_Serif } from "next/font/google";
import HeaderMenu from "../components/headerMenu";
import FooterSection from "../components/footerSection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const noto = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <main className={`${inter.variable} ${noto.variable}`}>
      <HeaderMenu />
      <Component {...pageProps} />
      <FooterSection />
    </main>
  );
}

export default MyApp;
