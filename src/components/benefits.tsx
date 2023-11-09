import Image from "next/image";
import FAQ from "./faq";

const Benefits = () => {
  return (
    <div className="Features_pageContainer px-[12%]">
      <div className="Features_benefitsPart mb-60">
        <div className="flex flex-col items-center mb-6">
          <div className="Text_container flex justify-center items-center max-w-3xl mb-3">
            <h2 className="Text_lightHeader Text_titleH2 font-noto">
              Benefits of Tali
            </h2>
          </div>
          <div className="Text_container text-center flex items-center justify-center max-w-3xl mb-16">
            <div className="Text_lightParagraph Text_paragraph1">
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
              src="https://tali.aihttps://tali.ai/features/chart-arrow-up.svg"
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
              src="https://tali.aihttps://tali.ai/features/user-stethoscope.svg"
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
              src="https://tali.aihttps://tali.ai/features/rocket.svg"
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
          <div className="Text_lightParagraph Text_paragraph1">
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
            <div className="Text_lightParagraph Text_paragraph1">
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
      <div className="mb-60 pb-36 max-w-2xl flex justify-center items-center flex-col m-auto">
        <div className="Text_container justify-center flex items-center max-w-3xl">
          <h2 className="Text_lightHeader Text_titleH2">FAQs</h2>
          <div className="Divider_container">
            <div className="Divider_divider faq_faqDivider h-0 mt-6 w-full bottom-0 border-[#e9e6ec]"></div>
          </div>
        </div>
        <FAQ />
      </div>
      {/*   <div className="faq_wrapper Features_benefitsPart">
        <div className="Text_container" data-style="justify-content: center;">
          <h2 className="Text_lightHeader Text_titleH2">FAQs</h2>
        </div>
        <div className="Divider_container">
          <div className="Divider_divider faq_faqDivider"></div>
        </div>
        <div id="general" className="Features_category">
          <div
            className="Text_container"
            data-style="justify-content: flex-start; text-align: start;">
            <h2 className="Text_lightHeader Text_titleH2">General</h2>
          </div>
          <div className="Divider_container">
            <div className="Divider_divider faq_faqDivider"></div>
          </div>
          <div
            id="64091811"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">What is Tali? </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64091812"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Who can use Tali?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121889"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Who do I contact for more information or to set up a demo?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121902"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                How do I use it / How does it work?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121904"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                What sources does Tali use for Medical Search?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121905"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Which forms will it open?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121906"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                What data do you store? Is it secure?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
        </div>
        <div
          id="questions-specific-to-the-integration"
          className="Features_category">
          <div
            className="Text_container"
            data-style="justify-content: flex-start; text-align: start;">
            <h2 className="Text_lightHeader Text_titleH2">
              Questions Specific to the Integration
            </h2>
          </div>
          <div className="Divider_container">
            <div className="Divider_divider faq_faqDivider"></div>
          </div>
          <div
            id="64121909"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                How do I turn it off (disable it)?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121924"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                How do I turn it on again (re-enable it)?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121925"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Do I have to pay?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121926"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Can I use my own account if I have one already?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121927"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Can I use the Chrome extension instead of the integrated
                version?{" "}
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121928"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                What are the differences between the integration and the
                extension?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
          <div
            id="64121929"
            role="button"
            tabIndex={0}
            className="faq_noOutline">
            <div
              className="Text_container faq_question"
              data-style="justify-content: flex-start; text-align: start;">
              <div className="faq_caret faq_caretClosed">
                <Image
                  alt=""
                  loading="lazy"
                  width="10"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
                  data-style="color: transparent;"
                />
              </div>
              <h4 className="Text_lightHeader Text_subH1">
                Why can’t I see the widget on every page in Oscar?
              </h4>
            </div>
            <div className="Divider_container">
              <div className="Divider_divider faq_faqDivider"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Benefits;
