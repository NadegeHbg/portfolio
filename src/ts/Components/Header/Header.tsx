import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

import twitch from "../../../styles/assets/logos/twitch.png";
import linkedin from "../../../styles/assets/logos/linkedin.png";


const Header = () => {
    const { themeIcon, switchTheme } = useContext(ThemeContext);


    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        if (window.innerWidth < 700) {
            setToggle(!toggle)
        }
    }

    return (
        <nav className={toggle ? 'nav expanded bg' : 'nav'}>
            <div id="mobile" onClick={(handleToggle)}>
                <i className={`icon text fa-solid ${toggle ? "fa-xmark" : "fa-bars"}`}></i>
            </div>
            <div className="links">
                <i className={`text ${themeIcon}`} onClick={switchTheme}></i>


                <Link to="/" className="link text" onClick={(handleToggle)}>Welcome !</Link>
                <Link to="/portfolio" className="link text" onClick={(handleToggle)}>Portfolio</Link>
                <Link to="/resume" className="link text" onClick={(handleToggle)}>Resume</Link>
                <Link to="/contact" className="link text" onClick={(handleToggle)} >Contact</Link>
                <a href="https://www.linkedin.com/in/Nadege-Hbg" target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://www.twitch.tv/igotyb" target='_blank' rel="noreferrer">
                    <img src={twitch} alt="twitch logo" />
                </a>
            </div>
        </nav>
    )
}

export default Header;