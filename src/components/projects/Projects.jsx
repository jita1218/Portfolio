import React ,{useEffect} from "react";
import "./project.css";
import { Fade } from "react-awesome-reveal";
import img from "./cryptoxion.png";
import img1 from "./yoga.png";
import Aos from "aos";
import "aos/dist/aos.css";

import img2 from "./dreamkids.png";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    
    <>
      <Fade>
        <div className="project">
          <div className="cent">
            <p               data-aos="fade-down"
className="impact">I would love to showcase some of</p>

            <h2 className="pr">My Projects</h2>
          </div>
          <div className="gallery1">
            <div className="project_container"   data-aos="fade-up-right">
              <img src={img} alt="cryptoxion" className="project_image" />
              <div className="desc">
                provides up-to-date information and insights about
                cryptocurrency values and trends. real time currency value
              </div>
              <div className="butn">
              <a target="_blank" href="https://cryptoxion.netlify.app" className="btn">
                Visit Now
              </a>
              </div>
              
            </div>
            <div className="project_container"   data-aos="fade-up-left">
              <img src={img1} alt="cryptoxion" className="project_image" />
              <div className="desc">
                Basic ui/ux ,features guided sessions, customizable routines,
                and progress tracking to enhance your yoga experience
              </div>
              <div className="butn">
              <a target="_blank" href="https://jita1218.github.io/yoga_training_app" className="btn">
                Visit Now
              </a>
              </div>
            </div>
          </div>
          <div className="gallery1">
            <div className="project_container">
              <img src={img2} alt="cryptoxion" className="project_image"   data-aos="fade-up" />
              <div className="desc">
                engaging images and video rhymes to make learning fun and
                interactive for young children.
              </div>
              <div className="butn">
              <a target="_blank" href="https://dreamkids.netlify.app/ " className="btn">
                Visit Now
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
