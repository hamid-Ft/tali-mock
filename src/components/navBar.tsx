import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-transparent sticky">
      <div className="Navbar_header">
        <div className="Navbar_headerContainer">
          <div className="Navbar_taliLogo">
            <a href="/">
              <div>
                <Image
                  alt="Tali logo"
                  loading="lazy"
                  width="88"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  className="Navbar_clickable"
                  src="https://tali.ai/_next/static/media/tali-logo.8be08cd4.svg"
                  data-style="color: transparent;"
                />
              </div>
            </a>
          </div>
          <div className="Navbar_menu">
            <a href="/features">
              <div className="Navbar_linkWrapper">
                Product<div className="Navbar_hide"></div>
              </div>
            </a>
            <a href="/pricing">
              <div className="Navbar_linkWrapper">
                Pricing<div className="Navbar_hide"></div>
              </div>
            </a>
            <a href="/faq">
              <div className="Navbar_linkWrapper">
                FAQ<div className="Navbar_hide"></div>
              </div>
            </a>
            <Link href="/install">
              <div className="Navbar_linkWrapper">
                Install<div className="Navbar_activeLinkIndicator"></div>
              </div>
            </Link>
            <a href="/resources">
              <div className="Navbar_linkWrapper">
                Resources<div className="Navbar_hide"></div>
              </div>
            </a>
            <a href="/api/auth/login" className="cursor-pointer">
              <div className="Navbar_linkWrapper">Sign In</div>
            </a>
            <div>
              <Image
                alt="Separator"
                loading="lazy"
                width="2"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://tali.ai/_next/static/media/separator-icon.f9732926.svg"
                data-style="color: transparent;"
              />
            </div>
            <a href="/api/auth/login" className="cursor-pointer">
              <div className="Navbar_lastItem">Get Started</div>
            </a>
          </div>
          <div className="Navbar_flexDMobile">
            <a href="/api/auth/login" className="cursor-pointer">
              <div className="Navbar_lastItem">
                <div
                  className="Text_container"
                  data-style="justify-content: center;">
                  <div className="Text_paragraph2SemiBold">Get Started</div>
                </div>
              </div>
            </a>
            <button className="Navbar_menuBar">
              <div>
                <Image
                  alt="Mobile Menu"
                  loading="lazy"
                  width="24"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/menu-bar.f6dec37a.svg"
                  data-style="color: transparent;"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
