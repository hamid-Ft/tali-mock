import Image from "next/image";

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
                    src="https://tali.ai/features/play-circle-filled-white.svg"
                    alt="play icon"
                    className="mr-1"
                    width={20}
                    height={20}
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
    </div>
  );
};

export default Benefits;
