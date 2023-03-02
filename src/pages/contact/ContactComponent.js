import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import ContactCard from "../../components/ContactCard/ContactCard";
import { projectsHeader, projects2 } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
             <div className="heading-div">
           
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
              Access control
              </h1>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
               Access control is an important security concept that involves regulating who has access to what resources within an organization. This can include physical resources such as buildings and equipment, as well as digital resources such as data and systems.
              </p>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h3 className="educations-header" style={{ color: theme.text }}>
          To implement access control, organizations can use the following methods:
          </h3>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects2.data.map((repo) => {
          return <ContactCard repo={repo} theme={theme} />;
        })}
      </div>
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h3 className="educations-header" style={{ color: theme.text }}>
          By implementing access control measures, organizations can ensure that only authorized users have access to their resources and protect against unauthorized access.
          </h3>
        </Fade>
        </div>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
