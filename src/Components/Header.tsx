import { Link } from "react-router-dom"
import twitch from "../assets/logos/twitch.png"
import linkedin from "../assets/logos/linkedin.png"


const Header = () => {
    return (
        <div className="nav">
            <Link to="/" className="link margin-r" >Welcome !</Link>
            <Link to="/portfolio" className="link margin-r" >Portfolio</Link>
            <Link to="/resume" className="link margin-r" >Resume</Link>
            <Link to="/contact" className="link margin-r" >Contact</Link>
            <a href="https://www.linkedin.com/in/Nadege-Hbg" className="margin-r" target='_blank' rel="noreferrer">
                <img src={linkedin} alt="linkedin logo" />
            </a>
            <a href="https://www.twitch.tv/igotyb" className="margin-r" target='_blank' rel="noreferrer">
                <img src={twitch} alt="twitch logo" />
            </a>
        </div>
    )
}

export default Header;