import {React} from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to = "/about-me">
                <button>ABOUT ME</button> 
            </NavLink>
            <NavLink to = "/">
                <button>SECOND</button> 
            </NavLink>            
        </div>
    )
}
export default Navbar
