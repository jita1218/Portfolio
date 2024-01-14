import React from 'react'
import './skill.css'
import { MdOutlineMail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { FaPaintBrush } from "react-icons/fa";
import dancingIcon from './dancing.ico';

const Skill = () => {
  return (
    
    <div className="skill_container" id='skills'>
      <div className="center">
        <h1>Skills</h1>
      </div>
      <div className="second_container">

      <div className="s_left">
        <h3 className='h_skills'>Programming Skills</h3>
        

        <div className="ul_container">
        <ul className='h_left'>
          <li>
         
          <h4><h2><FaHtml5 /></h2>HTML ,CSS</h4>
<p>Intermediate</p>
            
            <li>
            <h4><h2><FaJava /></h2>Python,c,java</h4>
            <p>Intermediate</p>

</li>
</li>
      
     
        </ul>
        <ul>
          <li>
          
          <h4><h2><BiLogoFlutter /></h2>Flutter</h4>

            <p>Intermediate</p>
            <li>
              <h4><h2><FaReact /></h2>React</h4>
              <p>Intermediate</p>
          
</li></li>
          
         
        </ul>
        </div>
      </div>



      <div className="s_left">
      <h3 className='h_skills'>Other Skills</h3>
   <div className="ul_container">
   <ul className='h_left'>
          <li>
            <h4><h2><GiMusicalNotes />
</h2>Singing</h4>
<p>Vocalist</p>
            <li>
              <h4><h2><TfiWrite />
</h2>writing</h4>
<p>Lyricist</p></li></li>
          
     
        </ul>
        <ul>
          <li><h4> <h2> <img
                    src={dancingIcon}
                    alt="Dancing Icon"
                    style={{ width: '32px', height: '32px' }}  
                  /></h2>Dancing</h4>
          <p>Hip-Hop,Bollywood</p>
            
            <li>
              <h4><h2><FaPaintBrush />
</h2>Painting</h4>
<p>water color,wall painting</p></li></li>
         
         
        </ul>
   </div>
      </div>

        </div>
    </div>
  )
}

export default Skill