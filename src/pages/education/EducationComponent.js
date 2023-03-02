import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
              Confidentiality
              </h1>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
               Confidentiality is an important security concept that involves protecting sensitive information from unauthorized access or disclosure. This can include personal information, financial data, intellectual property, and other sensitive information.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h3 className="educations-header" style={{ color: theme.text }}>
          By implementing these measures, organizations can ensure the confidentiality of their sensitive information and protect against unauthorized access or disclosure.
          </h3>
        </Fade>
      </div>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
