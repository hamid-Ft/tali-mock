import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<null | number>(null);

  const questions = [
    {
      title: "What is Tali?",
      answer:
        "Tali AI is a voice-enabled artificial intelligence tool that virtually assists physicians with documentation and clerical tasks.",
    },
    {
      title: "Who can use Tali?",
      answer:
        "Any OSCAR Pro user can use Tali, but it has been designed with physicians in mind.",
    },
    {
      title: "Who do I contact for more information or to set up a demo?",
      answer:
        "Send your questions and demo requests to email to contact@tali.ai",
    },
    {
      title: "How do I use it / How does it work?",
      answer:
        "You can find some training videos on YouTube:\nMedical Scribe\nMedical Search\nEHR Assistant\nIf you have any other questions, or are having trouble with a feature, just reach out to help@tali.ai",
    },
    {
      title: "What sources does Tali use for Medical Search?",
      answer:
        "Tali uses OpenFDA, Merck Manuals and ChoosingWisely. It uses natural language processing algorithms to understand and interpret user queries and retrieve relevant information from those sources.",
    },
    {
      title: "Which forms will it open?",
      answer:
        "The EHR Assistant will open any form or e-form enabled on your version of OSCAR Pro.",
    },
    {
      title: "What data do you store? Is it secure?",
      answer:
        "Tali does not store PHI. Tali does store data in Canada. All data is encrypted at rest and in flight.<br/>Tali stores audio files for one month. A subset of these are de-identified and stored for longer to use for ongoing product improvements.<br/>For any more detailed questions, our Terms of Service and Privacy Policy may be of interest, or you can reach out to help@tali.ai and we’ll resolve your concerns.",
    },
  ];

  const handleClick = (index: number) => {
    if (selectedQuestion === index) {
      // If the question is already open, close it
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="flex">
          <div className="faq_caret faq_caretClosed">
            <Image
              className="pt-1 pr-1"
              alt="arrow"
              loading="lazy"
              width={10}
              height={17}
              decoding="async"
              src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
            />
          </div>
          <h2 onClick={() => handleClick(index)}>{question.title}</h2>
          {selectedQuestion === index && <p>{question.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
