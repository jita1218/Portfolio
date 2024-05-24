import React ,{useEffect} from "react";
import "./about.css";
import image from "./jitu.jpg";
import Resume from "./jitu resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="about_container " id="about">
        <article className="about_left"   data-aos="fade-up" >
          <div className="left_me_container">
            <div className="left_me">
              <h1 className="home__title">Jitu Verma</h1>
              <h3 className="home__subtitle">B.Tech Student</h3>
              <p className="home__description">
                I am a Computer Science and Engineering Undergraduate of NIT
                Silchar. I am learning full stack Web development and also
                trying to improve my problem solving skills.{" "}
              </p>
            </div>
            
            <a target="_blank" href={Resume} className="say_hello">
              Resume
            </a>
          </div>
        </article>

        <div className="about_right"  >
          <div className="image_container">
            <img src={image} className="profile_image" alt="it's me" />
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
