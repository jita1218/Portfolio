import React, { useEffect } from "react";
import "./project.css";

import "aos/dist/aos.css";
import Aos from "aos";

import { Fade } from "react-awesome-reveal";

import img from "./cryptoxion.png";
import img1 from "./yoga.png";
import img4 from "./airDraw.png";
import img3 from "./chatapp.jpg";
import img2 from "./dreamkids.png";
import img5 from "./dress.png";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Fade>
        <div className="project" id="projects">
          <div className="cent">
            <p data-aos="fade-down" className="impact">
              I would love to showcase some of
            </p>

            <h2 className="pr">My Projects</h2>
          </div>
          <div className="gallery1">
            <div className="project_container">
              <img
                src={img3}
                alt="cryptoxion"
                className="project_image"
                data-aos="fade-up"
              />
              <div className="desc">
                make new friends, chat with them, and share your thoughts and
                have video chat on the go.
              </div>
              <div className="butn">
                <a
                  target="_blank"
                  href="https://chatapp-ovgs.onrender.com/ "
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jita1218/chatApp.git "
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
            <div className="project_container">
              <img
                src={img2}
                alt="cryptoxion"
                className="project_image"
                data-aos="fade-up"
              />
              <div className="desc">
                engaging images and video rhymes to make learning fun and
                interactive for young children.
              </div>
              <div className="butn">
                <a
                  target="_blank"
                  href="https://dreamkids.netlify.app/ "
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jita1218/lil_kidos.git "
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="gallery1">
            <div className="project_container" data-aos="fade-up-right">
              <img src={img} alt="cryptoxion" className="project_image" />
              <div className="desc">
                provides up-to-date information and insights about
                cryptocurrency values and trends. real time currency value
              </div>
              <div className="butn">
                <a
                  target="_blank"
                  href="https://cryptoxion.netlify.app"
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jita1218/cryptox.git "
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
            <div className="project_container" data-aos="fade-up-left">
              <img src={img1} alt="cryptoxion" className="project_image" />
              <div className="desc">
                Basic ui/ux ,features guided sessions, customizable routines,
                and progress tracking to enhance your yoga experience
              </div>
              <div className="butn">
                <a
                  target="_blank"
                  href="https://jita1218.github.io/yoga_training_app"
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jita1218/yoga_training_app.git "
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="gallery1">
            <div className="project_container" data-aos="fade-up-right">
              <img src={img4} alt="cryptoxion" className="project_image" />
              <div className="desc">
                A real-time air drawing app using hand gestures, built with
                 Python, OpenCV, MediaPipe, and a Flask-powered web frontend.
              </div>
              <div className="butn">
                <a
                  target="_blank"
                  href="https://youtu.be/NwHQXyfXrZ0"
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jita1218/hand-canvas.git"
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
            <div className="project_container" data-aos="fade-up-left">
              <img
                src={img5}
                alt="cryptoxion"
                style={{ background: "white" }}
                className="project_image"
              />
              <div className="desc">
                Added OTP and password login with MongoDB and Axios/Redux for secure and smooth data handling.
              </div>
              <div className="butn">
              <a
                  target="_blank"
                  href="https://www.assamesedress.shop/"
                  className="btn"
                >
                  Visit Now
                </a>
                <a
                  target="_blank"
                  href="https://github.com/lahonsourav/gamusatogether.git "
                  className="btn"
                  style={{ color: "HighlightText" }}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Projects;
