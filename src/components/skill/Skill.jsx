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
import msIcon from './office.ico';
import { Fade } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";
import { FaNetworkWired } from 'react-icons/fa'; 

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
<li style={{marginLeft:"2rem"}}>
            <h4 className='h4'><h3 className='h2'><IoLogoJavascript/></h3>javascript</h4>
            <p>Intermediate</p>

</li>

       
        </ul>
        <ul className='h_left'>
          <li>
         
          <h4 className='h4'><h3 className='h2'><FaJava /></h3>java,C++,python</h4>
<p>Intermediate</p>

          
</li>
<li>
            <h4 className='h4'><h3 className='h2'><FaNetworkWired /></h3>TCP/IP</h4>
            <p>Intermediate</p>

</li>

       
        </ul>
        <ul className='h_left'>
          <li>
          
          <h4 className='h4'><h3 className='h2'><BiLogoFlutter /></h3>Flutter</h4>

            <p>Intermediate</p>
            </li>
            <li style={{marginLeft:"2rem"}}>
              <h4 className='h4'><h3 className='h2'><FaReact /></h3>Mern Stack</h4>
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
            <li style={{marginLeft:"3rem"}} >
              <h4 className='h4'><h3 className='h2'>< TfiWrite />
</h3>writing</h4>
<p>Lyricist</p></li>
     
        </ul>
        <ul className='h_left'>
          <li>
            <h4 className='h4'><h3 className='h2'>
            <MdAddAPhoto />
</h3 >Photography</h4>
<p>Creative Vision</p>
            </li>
            <li >
              <h4 className='h4'>
                <h3 className='icons'><img
          className='h3'
                    src={msIcon}
                    alt="Dancing Icon"
                    style={{ width: '20px', height: '20px'}}  
/>
</h3>MS Office</h4>
<p>Word, Excel, PowerPoint</p></li>
     
        </ul>
        <ul className='h_left'>
          <li><h4 className='h4' >
            <h3 className='icons'> <img
          className='h3'
                    src={dancingIcon}
                    alt="Dancing Icon"
                    style={{ width: '20px', height: '20px' }}  
                  /></h3>Dancing</h4>
          <p style={{fontSize:"14px"}}>Hip-Hop, Bollywood</p>
            
           </li>
           <li>
              <h4 className='h4'><h3 className='h2'><FaPaintBrush />
</h3>Painting</h4>
<p style={{fontSize:"14px"}}>water color,wall painting</p></li>
         
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
