import { useEffect } from "react"; 
import { Link, useRouteMatch, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons" 
import "./SubNav.css"

const SubNav = (props) => {
    const { data } = props

    const { url } = useRouteMatch();

    return (
        <div className="subnav-wrapper">
            <nav>
                {data.map((dt,idx) => (
                    <div className="boxLink">
                    <h2 key={idx+1}><FontAwesomeIcon icon={faMobileScreen} /></h2>
                    <NavLink key={idx} to="">{dt}</NavLink>
                    </div>
                ))}
            </nav>
        </div>
    )   
}

export default SubNav