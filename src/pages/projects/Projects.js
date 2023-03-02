import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
              Availability
              </h1>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
              Availability is an important security concept that involves ensuring that authorized users have access to data and information when they need it. This is particularly important in mission-critical systems where the availability of data and information is essential for the organization's operations.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
          To ensure the availability of information, it is important to implement the following measures:
          </h1>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h3 className="educations-header" style={{ color: theme.text }}>
          By implementing these measures, organizations can ensure the availability of their data and information and protect against disruptions to their operations.
          </h3>
        </Fade>
        </div>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
