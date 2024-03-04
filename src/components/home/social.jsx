import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Social =() => {
    return(
        <div className="home_social">
            <a href="https://www.linkedin.com/in/jitu-verma-a83a8a250/" className="chrome" target="_blank" rel="noreferrer">
<FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100088249653067&sk=about_details" className="chrome" target="_blank" rel="noreferrer">
            <FaFacebook />
                        </a>

            <a href="https://github.com/jita1218" className="git" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
            <a href="https://jituverma.com" className="git" target="_blank" rel="noreferrer">
            <FaInstagram />
            </a>
        </div>
    )
}

export default Social