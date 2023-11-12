import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-tali-black bg-tali-bg-glow-static bg-center bg-no-repeat">
      <div className="flex flex-col pt-[3.125rem] pb-[4.375rem] lg:py-[4.5rem] px-8 gap-[1.313rem] lg:gap-6 justify-center items-center">
        <div className="text-white text-tali-h2-mobile not-italic font-noto text-left lg:text-center w-[19.438rem] lg:w-auto">
          <p>Looking to Reduce Time Spent On</p>

          <p>Documentation and Administrative Tasks?</p>
        </div>
        <a
          className="py-5 px-6 lg:px-12 w-[19.438rem] lg:w-auto text-tali-black not-italic text-tali-btn text-center font-inter yellow-btn"
          href="/api/auth/login">
          <div>Get Free Access</div>
        </a>
      </div>
      <div className="w-full h-[2px] bg-tali-onyx"></div>
      <div className="h-[316px] flex items-center justify-center flex-grow-[0.38]">
        <div className="w-[89%] grid grid-cols-5 justify-items-start ">
          <div className="Footer_logo">
            <Image
              alt="Tali-logo"
              loading="lazy"
              width="76"
              height="24"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/_next/static/media/small-tali-logo.3c99f246.svg"
              data-style="color: transparent;"
            />
          </div>
          <div className="grid gap-3">
            <div className="justify-start text-start max-w-2xl">
              <div className="font-bold text-sm text-[#e7e7e7]">Tali</div>
            </div>
            <a href="/features">Product</a>
            <a href="/pricing">Pricing</a>
            <a href="/about-us">About Us</a>
            <Link href="/install">Install</Link>
            <a href="/security-privacy">Security and Privacy</a>
          </div>
          <div className="grid gap-3">
            <div className="justify-start text-start max-w-2xl">
              <div className="font-bold text-sm text-[#e7e7e7]">Support</div>
            </div>
            <a href="/resources">Resources</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="grid gap-3">
            <div className="justify-start text-start max-w-2xl">
              <div className="font-bold text-sm text-[#e7e7e7]">Legal</div>
            </div>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookies Policy</a>
          </div>
          <div className="grid gap-3">
            <div className="justify-start text-start max-w-2xl">
              <div className="font-bold text-sm text-[#e7e7e7]">Follow Us</div>
            </div>
            <div className="Footer_iconsWrapper flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ca.linkedin.com/company/tali-ai/">
                <div className="Footer_iconWrapper">
                  <Image
                    alt="Connect on Linked In"
                    loading="lazy"
                    width="18"
                    height="18"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/linkedin-icon.1da9a852.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/TaliAICompany">
                <div className="Footer_iconWrapper">
                  <Image
                    alt="Follow us on Twitter"
                    loading="lazy"
                    width="18"
                    height="18"
                    decoding="async"
                    data-nimg="1"
                    src="https://tali.ai/_next/static/media/twitter-icon.7be3af47.svg"
                    data-style="color: transparent;"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-tali-onyx"></div>
      <div className="flex-grow-[0.14] flex items-center justify-center h-[110px]">
        <div className="w-[89%] grid grid-cols-5 justify-items-start">
          <div className="Footer_copyrightText">
            <div className="justify-start text-start max-w-2xl">
              <div className="Text_darkParagraph">Tali AI</div>
            </div>
            <div className="justify-start text-start max-w-2xl">
              <div className="Text_darkParagraph">Copyright © 2023</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
