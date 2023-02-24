import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="nav">
            <Link to="/" className="link" >Welcome !</Link>
            <Link to="/portfolio" className="link" >Portfolio</Link>
            <Link to="/resume" className="link" >Resume</Link>
            <Link to="/contact" className="link" >Contact</Link>
        </div>
    )
}

export default Header;