import { useState } from "react";
import { Link } from "react-router-dom";

import twitch from "../../../assets/logos/twitch.png";
import linkedin from "../../../assets/logos/linkedin.png";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        if (window.innerWidth < 700) {
            setToggle(!toggle)
        }
    }

    return (
        // <div className="nav">
        //     <div id="desktop">

        //     </div>

        // </div>
        <nav className={toggle ? 'nav expanded' : 'nav'}>
            <div id="mobile" onClick={(handleToggle)}>
                {toggle ? <i className="fa-solid fa-xmark icon"></i> : <i className="fa-solid fa-bars icon"></i>}
            </div>
            <div className="links">
                <Link to="/" className="link" onClick={(handleToggle)}>Welcome !</Link>
                <Link to="/portfolio" className="link" onClick={(handleToggle)}>Portfolio</Link>
                <Link to="/resume" className="link" onClick={(handleToggle)}>Resume</Link>
                <Link to="/contact" className="link" onClick={(handleToggle)} >Contact</Link>
                <a href="https://www.linkedin.com/in/Nadege-Hbg" target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://www.twitch.tv/igotyb" className="margin-r" target='_blank' rel="noreferrer">
                    <img src={twitch} alt="twitch logo" />
                </a>
            </div>
        </nav>
    )
}

export default Header;