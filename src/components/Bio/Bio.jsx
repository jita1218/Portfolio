import React ,{useEffect} from "react";
import "./bio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsCheck2 } from "react-icons/bs";
import { Tilt } from "react-tilt";


const Bio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bio_container">
      <div className="center">
        <p className="impact"   data-aos="fade-down">Know more</p>
        <h2 className="h2">Bio Data</h2>
      </div>

      <div className="bio"   >
        <Tilt className="data">
          <div className="bio_first" >
            <h3>Education</h3>
          </div>
          <ul
                data-aos="fade-up"
                className="bio__list"
              >
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Standard I to X : P.B.V. Adarsh Vidhya Mandir,Didwana</p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Standard XI :Alpha Sen. sec. School, Jaipur
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Standard XII : Maharana Pratap Sen. Sec. School, Jaipur</p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    B.Tech : National Institute of Technology , Silchar (Pursuing)
                  </p>
                </li>
                </ul>
         
        </Tilt>

        <Tilt className="data">
          <div className="bio_first">
          <h3>What else I poses</h3>

          </div>
          <ul
                data-aos="fade-up"
                className="bio__list"
              >
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Leadership Skill, Event management, Event organising</p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Languages : English, Hindi and programming
                    languages
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Creative thinking, creative design, artistic mindset,
                    problem solving </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Good communication skills, good at making friends, Team work
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Interested in  Horror, Crime-suspense, thriller
                    movies
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Interested in conspiracy theory, black hole, time travel, parrallel
                    Universe 
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>love to Learn and speak More Languages like Assamese , Telugu </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Love nature , animals and watching cartoon </p>
                </li>
              </ul>
        </Tilt>
        <Tilt className="data">
          <div className="bio_first">
          <h3>Extra Curricular</h3>
          </div>
          <ul
                data-aos="fade-up"
                className="bio__list"
              >
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Organised and managed Events in different Institutes.</p>
                </li>
                
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Love to dance and sing . </p>
                </li>

                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                  Marketing for TECHNOESIS 2023 and E-cell at 2022

                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>
                    Oraganised events in Technoesis 2023 (E-cell)
                  </p>
                </li>
                <li className="li">
                  <BsCheck2 className="bio__list_icon" />
                  <p>Core member at E-cell , Dance club and music club ,NIT Silchar</p>
                </li>
              </ul>
        </Tilt>
      </div>
    </div>
  );
};

export default Bio;
