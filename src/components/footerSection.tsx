import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="bg-tali-black bg-tali-bg-glow-static bg-center bg-no-repeat">
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
      <div className="Footer_linksContainer">
        <div className="Footer_wrapper">
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
          <div className="Footer_products Footer_footerColumn">
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_paragraph2 Footer_title">
                Tali
              </div>
            </div>
            <a href="/features">Product</a>
            <a href="/pricing">Pricing</a>
            <a href="/about-us">About Us</a>
            <Link href="/install">Install</Link>
            <a href="/security-privacy">Security and Privacy</a>
          </div>
          <div className="Footer_support Footer_footerColumn">
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_paragraph2 Footer_title">
                Support
              </div>
            </div>
            <a href="/resources">Resources</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="Footer_legal Footer_footerColumn">
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_paragraph2 Footer_title">
                Legal
              </div>
            </div>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookies Policy</a>
          </div>
          <div className="Footer_icons Footer_footerColumn">
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_paragraph2 Footer_title">
                Follow Us
              </div>
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
      <div className="Footer_footerFooter">
        <div className="Footer_copyrightContainer">
          <div className="Footer_copyrightText">
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_copyright">Tali AI</div>
            </div>
            <div
              className="Text_container"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="Text_darkParagraph Text_copyright">
                Copyright © 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
