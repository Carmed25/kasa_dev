

import { NavLink } from "react-router-dom";
import './Navbar.scss'

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_link">
                    <NavLink to='/' className={({isActive})=>(isActive? 'active':'')} >Accueil 
                    </NavLink>
                </li>

                <li className="navbar_link">
                    <NavLink to='/about' className={({isActive})=>(isActive? 'active':'')} >A propos
                    </NavLink>
                </li>
            
           </ul>
        </nav>
    );
}

