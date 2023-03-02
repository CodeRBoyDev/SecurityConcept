import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
           
            <div className="experience-heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Integrity
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
              Integrity is an important security concept that involves the preservation of the accuracy and completeness of data and information. This means that the information should not be altered or corrupted in any way, either intentionally or unintentionally.
              </p>
            </div>
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h3 className="educations-header" style={{ color: theme.text }}>
          By implementing these measures, organizations can ensure the integrity of their information and protect against unauthorized changes or corruption.
          </h3>
        </Fade>
        </div>
        <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
