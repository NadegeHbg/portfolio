import { useState } from "react"
import { Link } from "react-router-dom"

import twitch from "../../../assets/logos/twitch.png"
import linkedin from "../../../assets/logos/linkedin.png"

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        // <div className="nav">
        //     <div id="desktop">

        //     </div>

        // </div>
        <nav className={toggle ? 'nav expanded dark' : 'nav dark'}>
            <div id="mobile" onClick={(handleToggle)}>
                {toggle ? <i className="fa-solid fa-xmark icon"></i> : <i className="fa-solid fa-bars icon"></i>}
            </div>
            <div className="links">
                <Link to="/" className="link text" >Welcome !</Link>
                <Link to="/portfolio" className="link text" >Portfolio</Link>
                <Link to="/resume" className="link text" >Resume</Link>
                <Link to="/contact" className="link text" >Contact</Link>
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