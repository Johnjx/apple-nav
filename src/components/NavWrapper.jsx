import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import "./NavWrapper.css"

const NavWrapper = () => {

    return (
    <div className="nav-wrapper">
        <nav>
            <Link to="/"><FontAwesomeIcon icon={faApple} /></Link>
            <Link to="">Store</Link>
            <Link to="/mac">Mac</Link>
            <Link to="">iPad</Link>
            <Link to="/iPhone">iPhone</Link>
            <Link to="">Watch</Link>
            <Link to="">AirPods</Link>
            <Link to="">TV &amp; Home</Link>
            <Link to="">Only on Apple</Link>
            <Link to="">Accessories</Link>
            <Link to="">Support</Link>
            <Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
        </nav>
    </div>
    )
}

export default NavWrapper