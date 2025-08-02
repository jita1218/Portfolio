import React ,{useEffect} from "react";
import "./about.css";
import image from "./jitu.jpg";
import Resume from "./jitu's resume.pdf";
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
              <p className="home__description" style={{color:"black"}}>
I am a full-stack developer with a passion for building dynamic and efficient digital solutions. Beyond code, I express my creativity through dance and singing, bringing rhythm and artistry into every aspect of life. Explore my work below!                 </p>
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
