import React, { useState } from "react";
import styles from './CommunityIncentives.css';

const CommunityIncentives = () => {
  // Stepper state
  const [activeStep, setActiveStep] = useState(0);

  // Cards data
  const cardsData = [
    {
      step: 1,
      title: "Buy with conviction",
      description:
        "Only buy if you're prepared to hold long-term. No panic. No chasing. Just patience.",
    },
    {
      step: 2,
      title: "Bull Post & Share Vision",
      description:
        "Create content, share memes, and spread the word. Hype with purpose — help shape the future of the coin.",
    },
    {
      step: 3,
      title: "Let Time Teach You",
      description:
        "Track your own journey. Learn about long-term investing through your results — wins, losses, and everything in between.",
    },
  ];

  return (
    <div className="container-lg">
      {/* Intro Section */}
      <div className="mb-4 Cards_intro__ubVy0">
        <h1>The Nothing Strategy</h1>
        <p>Sometimes doing nothing is the smartest move.</p>
      </div>

      {/* Cards Section */}
      <div className="position-relative">
        <div className="Cards_wrapper__uEP2O">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`Cards_card__imtDZ ${
                index === 0
                  ? "Cards_middle__eQ3I8"
                  : index === 1
                  ? "Cards_left__xhFhW"
                  : "Cards_right__zBVnW"
              } Cards_inView__h7Oae`}
            >
              <div className="Cards_cardC__VIZU5">
                <div className="Cards_triangle__L_IK_"></div>
                <h2 className="Cards_stepNumber__KhF3s">{card.step}</h2>
                <div className="Cards_imageHolder__tILQH">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    className="Cards_image__3dxp6"
                    alt="Icon representing the step"
                  >
                    <path
                      fill="currentColor"
                      d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"
                    ></path>
                  </svg>
                  <h1 className="Cards_stepTitle__s2SUu">{card.title}</h1>
                </div>
                <p className="Cards_description__AgzsK">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stepper */}
      <div
        className="d-flex d-sm-none justify-content-start align-items-center"
        style={{ columnGap: "10px" }}
      >
        {/* Previous Step */}
        <div
          className={`Cards_stepper__8uquw ${activeStep === 0 ? "Cards_disabled__L8onf" : ""}`}
          onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="Cards_iconStep__a1yJK"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path>
          </svg>
        </div>

        {/* Next Step */}
        <div
          className={`Cards_stepper__8uquw ${activeStep === cardsData.length - 1 ? "Cards_disabled__L8onf" : ""}`}
          onClick={() => activeStep < cardsData.length - 1 && setActiveStep(activeStep + 1)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="Cards_iconStep__a1yJK"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CommunityIncentives;