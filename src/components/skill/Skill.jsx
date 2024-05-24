import React ,{useEffect} from 'react'
import './skill.css'
import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { FaPaintBrush } from "react-icons/fa";
import dancingIcon from './dancing.ico';
import { Fade } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <Fade>
    <div className="skill_container" id='skills'>
      <div className="center">
      <p data-aos="fade-down" className='impact'>I am trying to learn and improve</p>

        <h2 className='sk'>These Skills</h2>
       
      </div>
      <div className="second_container">

      <div className="s_left"    >
        <h3             
className='h_skills'>Programming Skills</h3>
        

        <div className="ul_container" data-aos="fade-right">
        <ul className='h_left'>
          <li>
         
          <h4 className='h4'><h3 className='h2'><FaHtml5 /></h3>HTML ,CSS</h4>
<p>Intermediate</p>

          
</li>
<li>
            <h4 className='h4'><h3 className='h2'><FaJava /></h3>python,c,java</h4>
            <p>Intermediate</p>

</li>

       
        </ul>
        <ul className='h_left'>
          <li>
          
          <h4 className='h4'><h3 className='h2'><BiLogoFlutter /></h3>Flutter</h4>

            <p>Intermediate</p>
            </li>
            <li>
              <h4 className='h4'><h3 className='h2'><FaReact /></h3>React</h4>
              <p>Intermediate</p>
          
</li>
         
        </ul>
        </div>
      </div>



      <div className="s_left"    >
      <h3 className='h_skills'>Other Skills</h3>
   <div className="ul_container" data-aos="fade-left">
   <ul className='h_left'>
          <li>
            <h4 className='h4'><h3 className='h2'><GiMusicalNotes />
</h3 >Singing</h4>
<p>Vocalist</p>
            </li>
            <li>
              <h4 className='h4'><h3 className='h2'><TfiWrite />
</h3>writing</h4>
<p>Lyricist</p></li>
     
        </ul>
        <ul className='h_left'>
          <li><h4 className='h4' >
            <h3 className='icons'> <img
          className='h2'
                    src={dancingIcon}
                    alt="Dancing Icon"
                    style={{ width: '30px', height: '30px' }}  
                  /></h3>Dancing</h4>
          <p>Hip-Hop, Bollywood</p>
            
           </li>
           <li>
              <h4 className='h4'><h3 className='h2'><FaPaintBrush />
</h3>Painting</h4>
<p>water color,wall painting</p></li>
         
        </ul>
   </div>
      </div>

        </div>

    </div>
    </Fade>
    </>
  )
}

export default Skill
