import React from 'react'
import "./Footer.css"
import instagram from "../../static/instagram.svg"
import linkedin from "../../static/linkedin.svg"
import github from "../../static/github.svg"
import soundcloud from "../../static/soundcloud.svg"

function Footer() {
    return (
        <div className="footer">
            <div className="footer__imgController">
                <a className="rulesarch" target="blank" href="https://www.instagram.com/marcos_campot/"  ><img src={instagram} alt="socialmedia" /></a>
                <a target="blank" href="https://www.linkedin.com/in/marcos-campot-687152216/"><img src={linkedin} alt="socialmedia"/></a>
                <a target="blank" href="https://github.com/Dyehuthy-mes"><img src={github} alt="socialmedia"/></a>
                <a target="blank" href="https://soundcloud.com/user-521651301"><img src={soundcloud} alt="socialmedia"/></a>
            </div>
            <div className="footer__number"><span>11 6915 3063</span></div>
        </div>
    )
}

export default Footer;


