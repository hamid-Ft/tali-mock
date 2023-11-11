import Image from "next/image";
import FAQ from "./faq";

const Benefits = () => {
  return (
    <div className="Features_pageContainer px-[12%] bg-[#f1f4ff] pt-4">
      <div className="Features_benefitsPart mb-60">
        <div className="flex flex-col items-center mb-6">
          <div className="Text_container flex justify-center items-center max-w-3xl mb-3">
            <h2 className="Text_lightHeader Text_titleH2 font-noto">
              Benefits of Tali
            </h2>
          </div>
          <div className="Text_container text-center flex items-center justify-center max-w-3xl mb-16">
            <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
              We have worked hard on shaping our identity as a company and we
              have come up with the following values and culture. If they
              resonate with you, please reach out! We are always looking for
              like-minded people to join our team.
            </div>
          </div>
        </div>
        <div className="BenefitsOfTaliSection_benefitsCardContainer flex gap-8">
          <div className="BenefitsOfTaliSection_benefitCard">
            <Image
              alt="feature intro item icon"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/features/chart-arrow-up.svg"
            />
            <div className="BenefitsOfTaliSection_benefitTitle">Save Time</div>
            <div className="BenefitsOfTaliSection_benefitText">
              designed to save time for healthcare professionals by streamlining
              workflows. Its real-time speech-to-text transcription allows
              physicians to dictate information, eliminating the need for manual
              data entry.
            </div>
          </div>
          <div className="BenefitsOfTaliSection_benefitCard">
            <Image
              alt="feature intro item icon"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/features/user-stethoscope.svg"
            />
            <div className="BenefitsOfTaliSection_benefitTitle">
              Cost Saving
            </div>
            <div className="BenefitsOfTaliSection_benefitText">
              By reducing the need for manual data entry and other
              administrative tasks, Tali can help to lower costs for healthcare
              organizations and reduce staff workload.
            </div>
          </div>
          <div className="BenefitsOfTaliSection_benefitCard">
            <Image
              alt="feature intro item icon"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/features/rocket.svg"
            />
            <div className="BenefitsOfTaliSection_benefitTitle">
              Fully Integrated
            </div>
            <div className="BenefitsOfTaliSection_benefitText">
              This integration allows physicians to access patient information,
              schedule appointments, and order lab tests directly from within
              the Oscar Pro EMR system, eliminating the need to switch between
              multiple programs.
            </div>
          </div>
        </div>
      </div>
      <div className="Features_securityPart pb-60 max-w-2xl text-center m-auto">
        <div className="Text_container flex justify-center items-center max-w-3xl mb-4">
          <h2 className="Text_lightHeader Text_titleH2 font-noto">
            Dedicated to Security and Privacy
          </h2>
        </div>
        <div className="Text_container justify-center">
          <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
            Tali AI is compliant in both the Personal Information Protection Act
            (PIPA) and the Personal Information Protection and Electronic
            Documents Act (PIPEDA). All of our services including our free AI
            dictation and drug monographs search are protected by layers of
            firewalls and monitoring solutions that look for suspicious
            activities to block before any secure information can be accessed.
          </div>
        </div>
      </div>
      <div className="container mx-auto WhereToStartSection_wrapper flex items-center gap-8 Features_whereToStartPart">
        <Image
          width={574}
          height={503}
          className="WhereToStartSection_image"
          src="/where-to-start.png"
          alt="Tali integration with OSCAR Pro"
        />
        <div className="WhereToStartSection_content flex flex-grow flex-col items-start">
          <div className="Text_container justify-start mb-6">
            <h2 className="Text_lightHeader Text_titleH2 font-noto">
              Where to start
            </h2>
          </div>
          <div className="Text_container max-w-3xl justify-center">
            <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
              To start using Tali, you will be prompted to sign up or sign in
              after clicking on the widget on the right of your Oscar Pro
              homepage. Once you enter an email, Tali will identify if that
              email has signed up for a Tali account or not. If you have a Tali
              account, you will be signed in and if you don’t, you will be
              prompted to sign up for Tali. Once you have an account, you will
              be returned to your Oscar Pro homepage and can begin using Tali’s
              features.
            </div>
          </div>
          <div className="mt-6 w-full max-w-md">
            <a href="https://www.youtube.com/watch?v=e3fzdAMNmZk">
              <div className="WhereToStartSection_advancedBtn">
                <div className="flex flex-row justify-center items-center cursor-pointer border-none text-white w-full rounded-full transition-colors ease-in-out duration-300 bg-[#261835] py-4">
                  <Image
                    width={20}
                    height={20}
                    src="https://tali.ai/features/play-circle-filled-white.svg"
                    alt="play icon"
                    className="mr-1"
                  />
                  <div className="Text_container">
                    <div className="Text_paragraph1">
                      Getting started with Tali on OSCAR Pro
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="faq_wrapper Features_benefitsPart mb-60 pt-5 pb-36 w-[720px] m-auto">
        <div className="Text_container flex justify-center text-center items-center max-w-3xl">
          <h2
            className="Text_lightHeader Text_titleH2 text-center pt-[240px]
           text-black font-normal leading-[49px] text-[36px] font-noto">
            FAQs
          </h2>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-full mt-6 h-0 border border-[#e9e6ec]"></div>
        </div>
        <div id="general" className="mt-11">
          <div className="Text_container justify-start text-start">
            <h2 className="Text_lightHeader Text_titleH2 text-black font-normal leading-[49px] text-[36px] font-noto">
              General
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-full mt-6 h-0 border border-[#e9e6ec]"></div>
          </div>
          <FAQ
            question="What is Tali?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  Tali AI is a voice-enabled artificial intelligence tool that
                  virtually assists physicians with documentation and clerical
                  tasks.{" "}
                </div>
              </div>
            )}
          />
          <FAQ
            question="Who can use Tali? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  Any OSCAR Pro user can use Tali, but it has been designed with
                  physicians in mind.
                </div>
              </div>
            )}
          />
          <FAQ
            question="Who do I contact for more information or to set up a demo?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>
                    Send your questions and demo requests to email to{" "}
                    <a className="text-black" href="mailto:contact@tali.ai">
                      <u>contact@tali.ai</u>
                    </a>
                    &nbsp;
                  </p>
                </div>
              </div>
            )}
          />
          <FAQ
            question="How do I use it /  How does it work? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>You can find some training videos on YouTube:</p>
                  <ul className="list-disc pl-5">
                    <li>
                      <p>
                        <a
                          className="text-black"
                          href="https://www.youtube.com/watch?v=SNOd_-Fz6P4">
                          <u>Medical Scribe</u>
                        </a>
                        &nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          className="text-black"
                          href="https://www.youtube.com/watch?v=QG8kpjcBJaY">
                          <u>Medical Search</u>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          className="text-black"
                          href="https://www.youtube.com/watch?v=moTSTo8q8kc">
                          <u>EHR Assistant</u>
                        </a>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                    If you have any other questions, or are having trouble with
                    a feature, just reach out to{" "}
                    <a className="text-black" href="mailto:help@tali.ai">
                      <u>help@tali.ai</u>
                    </a>
                    &nbsp;
                  </p>
                </div>
              </div>
            )}
          />
          <FAQ
            question="What sources does Tali use for Medical Search?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  Tali uses OpenFDA, Merck Manuals and ChoosingWisely. It uses
                  natural language processing algorithms to understand and
                  interpret user queries and retrieve relevant information from
                  those sources.
                </div>
              </div>
            )}
          />
          <FAQ
            question="Which forms will it open? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  The EHR Assistant will open any form or e-form enabled on your
                  version of OSCAR Pro.
                </div>
              </div>
            )}
          />
          <FAQ
            question="What data do you store?  Is it secure?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>
                    Tali does not store PHI. Tali does store data in Canada. All
                    data is encrypted at rest and in flight.{" "}
                  </p>
                  <p>
                    Tali stores audio files for one month. A subset of these are
                    de-identified and stored for longer to use for ongoing
                    product improvements.&nbsp;
                  </p>
                  <p>
                    For any more detailed questions, our{" "}
                    <a
                      className="text-black"
                      href="https://tali.ai/terms-of-use">
                      <u>Terms of Service</u>
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-black"
                      href="https://tali.ai/privacy-policy">
                      <u>Privacy Policy</u>
                    </a>{" "}
                    may be of interest, or you can reach out to{" "}
                    <a className="text-black" href="mailto:help@tali.ai">
                      <u>help@tali.ai</u>
                    </a>{" "}
                    and we’ll resolve your concerns.
                  </p>
                </div>
              </div>
            )}
          />
        </div>
        <div id="questions-specific-to-the-integration" className="mt-11">
          <div className="Text_container justify-start text-start">
            <h2 className="Text_lightHeader Text_titleH2">
              Questions Specific to the Integration
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-full mt-6 h-0 border border-[#e9e6ec]"></div>
          </div>
          <FAQ
            question="How do I turn it off (disable it)? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>To disable:</p>
                  <ul className="list-disc pl-5">
                    <li>
                      <p>
                        Open the sidebar and scroll all the way to the
                        bottom.&nbsp;&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>Click on the ‘Disable button’</p>
                    </li>
                    <li>
                      <p>Follow the instructions</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
          <FAQ
            question="How do I turn it on again (re-enable it)?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  There will be a small button labeled ‘Tali’ in the bottom
                  right-hand corner. Click on that and the widget will reappear.
                </div>
              </div>
            )}
          />
          <FAQ
            question="Do I have to pay? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>
                    You can try it out for free.&nbsp; We have different{" "}
                    <a className="text-black" href="https://tali.ai/pricing">
                      <u>pricing levels</u>
                    </a>
                    available based on the level of usage and the size of your
                    practice
                  </p>
                </div>
              </div>
            )}
          />
          <FAQ
            question="Can I use my own account if I have one already? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  Yes, absolutely.{" "}
                </div>
              </div>
            )}
          />
          <FAQ
            question="Can I use the Chrome extension instead of the integrated version? "
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>
                    Yes.&nbsp; To use the Chrome extension instead, just add it
                    from the Chrome Store:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <p>
                        Go to the{" "}
                        <a
                          className="text-black"
                          href="https://chrome.google.com/webstore/detail/tali-ai/cmfdaldondfeihfgblhhjpaoddmmopgl">
                          <u>Chrome Store and search for ‘Tali AI’</u>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>Click ‘Add to Chrome’</p>
                    </li>
                    <li>
                      <p>Click ‘Add Extension’</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
          <FAQ
            question="What are the differences between the integration and the extension?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  The only difference is how the you access it. The underlying
                  product is the same.
                </div>
              </div>
            )}
          />
          <FAQ
            question="Why can’t I see the widget on every page in Oscar?"
            renderAnswer={() => (
              <div className=" pt-2 pl-6 justify-start text-start">
                <div className="font-inter text-[#373737] font-normal leading-6 text-[16px]">
                  <p>
                    In this first release, it has only been added to a few pages
                    to get started.&nbsp; Soon, it will be added to more
                    pages.&nbsp; If it isn’t&nbsp; on a page you need, please
                    reach out to
                    <a className="text-black" href="mailto:help@tali.ai">
                      <u>help@tali.ai</u>
                    </a>
                    and we’ll work with the WELL team to add it as quickly as
                    possible.
                  </p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
