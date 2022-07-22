import React, { useEffect } from "react";
import ScreenHeading from "../Utilities/ScreenHeading";
import ScrollService from "../Utilities/ScrollService";
import Animations from "../Utilities/Animations";
import "../../Styles/AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Summary:",
    highlights: {
      bullets: [
        "full Stack Web and Mobile Developer",
        "Responsive + interactive Front End Design",
        "Data Maniulation for business automation and sales",
      ],
      heading: "Highlights:",
    },
    // summary1: "I'm a Javascript Web app and also a future Swift App developer based out of Northern Dallas TX.",
    // summary2: "I've been coding for a little over a year and a half.",
    // summary3: "My current stack is: React, Firebase, Sass, D3.js.",
    // summary4: "My expected future stack: Swift, Next.js, Sass, Firebase, Reveal.js",
    // description: "Passion Project / Career Focus: My passion project focus is building responsive mobile/desktop Project Management / CRM Tools specific to different industries, that are fully integrated between apps/web apps and company main website user logins. ",
    // description2: "Passion Project Solution Focus: The professional problems I seek is real world accessibility and edibility to data, and automating much larger and complicated processes for smaller companies and startups, as well as provide more modern and elegant solutions than the desktop only focused products available today.",
    // educationTitle: "Udemy Courses I've Completed: ",
    // education1: "Modern Javascript (Complete guide, from Novice to Ninja): <br> https://www.udemy.com/certificate/UC-614b4bfb-b45e-4f39-a37e-3088af569e02/ ",
    // education2: "Build Web Apps with React + Firebase: <br> https://www.udemy.com/certificate/UC-740f91e0-a45d-438d-8eb9-53426f4ebcfc/",
    // education3: "Build Data Visualizations with D3.JS and Firebase <br> https://www.udemy.com/certificate/UC-5125155b-2587-435b-9fdb-facfcbe56acb/",
    // currentlyStudyingTitle: "Complete Next.js Developer in 2022: Zero to Mastery",
    // currentlyStudying: "Complete Next.js Developer in 2022: Zero to Mastery"
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
