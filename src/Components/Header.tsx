import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="">
            <Link to="/" className="link" >Welcome !</Link>
            <Link to="/portfolio" >Portfolio</Link>
            <Link to="/resume" >Resume</Link>
            <Link to="/contact" >Contact</Link>
        </div>
    )
}

export default Header