import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div className="Features_pageContainer Features_featuresContentsContainer  px-[12%] bg-[#f1f4ff] pt-24">
      <section className="FeaturesContentSection_featureContentSection text-center relative w-full">
        <div
          className="FeaturesContentSection_scrollAnchor absolute -top-24 w-0 h-0"
          id="ai-scribe"></div>
        <h2 className="font-noto">Medical Scribe</h2>
        <div className="FeaturesContentSection_sectionSubtitle ">
          Tali utilizes speech recognition and natural language processing to
          convert speech to text in electronic medical records. Tali records
          notes directly into your EMR. This mode of documentation is 3x faster
          than typing.
        </div>
        <div className="FeaturesContentSection_sectionBody relative mb-8">
          <object
            data="/patient.svg"
            className="m-auto max-w-full block align-middle"></object>

          <div className="FeaturesContentSection_sectionItems">
            <div className="flex-grow">
              <Image
                className="mb-4"
                width={27}
                height={48}
                src="https:tali.ai/features/microphone.svg"
                alt="feature intro item icon"
              />
              <div>
                Fast and efficient storage of patient information into the EMR
                system.
              </div>
            </div>
            <div className="flex-grow">
              <Image
                width={33}
                height={48}
                className="mb-4"
                src="https://tali.ai/features/clock.svg"
                alt="feature intro item icon"
              />
              <div>
                Hands-free operation, allowing physicians to focus on patient
                care
              </div>
            </div>
            <div className="flex-grow">
              <Image
                width={27}
                height={48}
                className="mb-4"
                src="http://tali.ai/features/finger-touch.svg"
                alt="feature intro item icon"
              />
              <div>
                Natural-language-processing facilitates real-time speech-to-text
                conversion
              </div>
            </div>
          </div>
        </div>

        <div className="FeaturesContentSection_sectionFooter max-w-2xl mb-11 leading-[150%] m-auto">
          Tali’s voice-enabled interface is intuitive: click the microphone
          button to start dictation and again to pause. Trained with hundreds of
          hours of medical terminologies delivered in different voices and
          accents, Tali also supports punctuation directions.
        </div>
        <a
          id="image-paragraph-link"
          tali-btn="true"
          className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-block px-14 py-5 text-center yellow-btn mt-11 relative z-[1] tali-btn"
          href="https://www.youtube.com/watch?v=moTSTo8q8kc">
          Watch how it works
        </a>
      </section>
      <section className="FeaturesContentSection_featureContentSection text-center relative w-full">
        <div
          className="FeaturesContentSection_scrollAnchor absolute -top-24 h-0 w-0"
          id="ehr-assistant"></div>
        <h2 className="font-noto">EHR Assistant</h2>
        <div className="FeaturesContentSection_sectionSubtitle">
          The EHR Assistant feature is designed to help physicians navigate and
          manage patient records more efficiently. It can perform a variety of
          tasks. By integrating Tali&apos;s, physicians can reduce their
          administrative burdens.
        </div>
        <div className="FeaturesContentSection_sectionBody relative mb-8">
          <object data="/patientEHR.svg" data-style="margin: auto;">
            Patient note
          </object>
          <div className="FeaturesContentSection_sectionItems">
            <div>
              <Image
                className="mb-4"
                width={20}
                height={48}
                src="https://tali.ai/features/lightning-bolt.svg"
                alt="feature intro item icon"
              />
              <div>
                Retrieve patient information and scheduling appointments.
              </div>
            </div>
            <div>
              <Image
                className="mb-4"
                width={33}
                height={48}
                src="https://tali.ai/features/clock.svg"
                alt="feature intro item icon"
              />
              <div>
                Fast data entry for accurate and up-to-date patient records.
              </div>
            </div>
            <div>
              <Image
                className="mb-4"
                width={33}
                height={48}
                src="https://tali.ai/features/book-open.svg"
                alt="feature intro item icon"
              />
              <div>
                Streamlining workflows and reducing administrative burden.
              </div>
            </div>
          </div>
        </div>
        <div
          className="FeaturesContentSection_sectionFooter max-w-screen-sm leading-[150%] m-auto
        ">
          A voice-enabled virtual assistant can be especially beneficial to
          healthcare practitioners, as it allows them to complete tasks
          hands-free while attending to patients - enhancing workflow
          efficiency.
        </div>
        <a
          id="image-paragraph-link"
          tali-btn="true"
          className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-block px-14 py-5 text-center yellow-btn mt-11 relative z-[1] tali-btn"
          href="https://www.youtube.com/watch?v=moTSTo8q8kc">
          Watch how it works
        </a>
      </section>
      <section className="FeaturesContentSection_featureContentSection text-center relative w-full">
        <div
          className="FeaturesContentSection_scrollAnchor absolute -top-24 h-0 w-0"
          id="medical-search"></div>
        <h2 className="font-noto">Medical Search</h2>
        <div className="FeaturesContentSection_sectionSubtitle">
          Ask Tali questions, including drug and dosage questions, and feel
          assured that the answers come from trustworthy, evidence-based
          sources.
        </div>
        <div className="FeaturesContentSection_sectionBody relative mb-8">
          <object
            data="/medicalSearch.svg"
            data-style="max-width: min(700px, 100%); margin: auto;"
            className="max-w-[min(700px,100%)] m-auto">
            Patient note
          </object>
          <div className="FeaturesContentSection_sectionItems">
            <div className="flex-grow">
              <Image
                className="mb-4"
                width={28}
                height={48}
                src="http://tali.ai/features/microphone.svg"
                alt="feature intro item icon"
              />
              <div>
                Prompted by the sound of your voice to conduct a quick and
                accurate information retrieval
              </div>
            </div>
            <div className="flex-grow">
              <Image
                className="mb-4"
                width={33}
                height={48}
                src="https://tali.ai/features/book-open.svg"
                alt="feature intro item icon"
              />
              <div>
                Tali’s medical search feature gives physicians access to trusted
                medical databases
              </div>
            </div>
            <div className="flex-grow">
              <div className="Features_docProviders h-full flex flex-col justify-center items-center gap-6">
                <div>
                  <Image
                    className="w-full"
                    width={105}
                    height={60}
                    src="/choosing-wisely.png"
                    alt="Choosing Wisely"
                  />
                </div>
                <div className="Features_bottomImage flex gap-9 items-end">
                  <div>
                    <Image
                      className="w-full"
                      width={125}
                      height={42}
                      src="/merck-manuals.png"
                      alt="Merck Manuals"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-full"
                      width={165}
                      height={30}
                      src="/open-FDA.png"
                      alt="Open FDA"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FeaturesContentSection_sectionFooter">
          When asked a question or to search for keywords, Tali returns with a
          screenshot of the relevant answer along with a link directly to the
          pertinent section with the option to show two alternative answers as
          well.
        </div>
        <a
          id="image-paragraph-link"
          tali-btn="true"
          className="not-italic text-tali-btn tracking-[-0.02em] font-inter inline-block px-14 py-5 text-center yellow-btn mt-11 relative z-[1] tali-btn"
          href="https://www.youtube.com/watch?v=QG8kpjcBJaY">
          Watch how it works
        </a>
      </section>
    </div>
  );
};

export default Features;
