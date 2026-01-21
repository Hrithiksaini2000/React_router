import { NavLink } from "react-router-dom"

export const Header=()=>{

    const getcolorchange = ({isActive}) => {
        return isActive ? "nav-header active" : "nav-header" 
    }
    return(
        <>
       <header>
        <h2>Hrithik Saini</h2>
        <nav>
            <ul>
                <li className="navcursor">
                    {/* <NavLink to="/" className={({isActive}) => isActive ? "nav-header active" : "nav-header" }>Home</NavLink> */}
                    <NavLink to="/" className={getcolorchange }>Home</NavLink>
                </li>
                <li className="navcursor"><NavLink to="/about" className="nav-header">About</NavLink></li>
                <li className="navcursor"><NavLink to="/movie" className="nav-header">Movie</NavLink></li>
                <li className="navcursor"><NavLink to="/contact" className="nav-header">Contact</NavLink></li>
            </ul>
        </nav>
       </header>
        </>
    )
}