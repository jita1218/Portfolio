import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social =() => {
    return(
        <div className="home_social">
            <a href="https://www.instagram.com/imjita/" className="chrome" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100088249653067&sk=about_details" className="chrome" target="_blank" rel="noreferrer">
            <FaFacebook />
                        </a>

            <a href="https://github.com/jita1218" className="git" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
        </div>
    )
}

export default Social