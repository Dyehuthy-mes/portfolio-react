import {React} from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to = "/">
                <button>ABOUT ME</button> 
            </NavLink>            
        </div>
    )
}
export default Navbar
