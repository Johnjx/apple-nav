import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import "./NavWrapper.css"

const testData = ["MacBook Air", "MacBook Pro", "iMac 24"]
const testData2 = ["13 Pro", "13", "SE"]

const NavWrapper = (props) => {
    const { change } = props

    const dataSetter = () => {
        change(testData)
    }

    const dataSetter2 = () => {
        change(testData2)
    }

    const dataReset = () => {
        change([])
    }

    return (
    <div className="nav-wrapper">
        <nav>
            <Link to="/" onClick={dataReset}><FontAwesomeIcon icon={faApple} /></Link>
            <Link to="">Store</Link>
            <Link to="/mac" onClick={dataSetter}>Mac</Link>
            <Link to="">iPad</Link>
            <Link to="/iPhone" onClick={dataSetter2}>iPhone</Link>
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