import { useState, useEffect } from "react";
import ScreenHeading from "../Utilities/ScreenHeading";
import ScrollService from "../Utilities/ScrollService";
import Animations from "../Utilities/Animations";
import "../../Styles/Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " " + "-" + " " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    {skill: "Javascript", ratingPercentage: 70},
        {skill: "React JS", ratingPercentage: 50},
        {skill: "Firebase", ratingPercentage: 65},
        {skill: "D3 JS", ratingPercentage: 35},
        {skill: "Webpack", ratingPercentage: 40},
        {skill: "Bootstrap", ratingPercentage: 75},
        {skill: "SASS", ratingPercentage: 50},
        {skill: "HTML", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 75},
        {skill: "Data Engineering", ratingPercentage: 75},
        {skill: "Sales", ratingPercentage: 95},
        {skill: "Visual Design + Marketing", ratingPercentage: 90},
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "Developing an online presence to showcase and highlight my experience and projects",
      subHeading: "Technologies Used: ReactJS, Firebase",
    },
    {
      title: "Solar Proposal Tool (Web App Version)",
      duration: { fromDate: "2018", toDate: "Current"},
      description: "Creating a mobile-responsive Solar Sales Proposal Generator, with CRUD database functionality. This can be defined as a Project Management Tool, Sales Automation and CRM, employee training modules and tests, amidst other business-centric software solutions",
      subHeading: "Technologies Used: NextJS, ReactJS, Redux, Firebase, D3.js, Reveal.JS"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Art Center College Of Education"}
        subHeading={"Transportation Design"}
        fromDate={"2014"}
        toDate={"2014"}
      />

      <ResumeHeading
        heading={"Perpich for the Center of Arts and Education"}
        subHeading={"Visual Arts Major - High School"}
        fromDate={"2006"}
        toDate={"2008"}
      />
      <ResumeHeading
        heading={"Irondale high School"}
        subHeading={"High School"}
        fromDate={"2004"}
        toDate={"2006"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Tech Solar Industries"}
          subHeading={"Business/Web/CRM Developer, Project Manager"}
          fromDate={"2021"}
          toDate={"Current"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
              Currently Working as a project manager for and simultaneously studying and building the CRM and Solar Proposal Tool.
          </span>
        </div>
        <div className="experience-description br">
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - More details about what i do...
          </span>
          <br />
          <span className="resume-description-text">
              - Even More details about what i do...
          </span>
          <br />
        </div>

        <ResumeHeading 
          heading={"ELM MicroGrid"}
          subHeading={"BizDev / Web Developer, Account Manager"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <ResumeHeading 
          heading={"Synaptic Solar"}
          subHeading={"Project Manager, Account"}
          fromDate={"2019"}
          toDate={"2020"}
        />

      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading 
          heading="Mountain Biking"
          description="Mountain Biking not only promotes a heathy lifestyle(physically, socially) but really clears my headspace and inspires me"
      />
      <ResumeHeading 
          heading="Jiu Jitsu"
          description="A more regular physical activity for me for both strength and Cardio"
      />
      <ResumeHeading 
          heading="Art"
          description="I love art both in it's expressive quality but also in its practical application in Sales, Product, Marketing, and UI Design"
      />
      <ResumeHeading 
          heading="Cars"
          description="I have a continual drive to create things"
      />
      <ResumeHeading 
          heading="Music"
          description="Energizes Me. Really Deserves all the credit for my long focus times (5hrs+)"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/Icons/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
