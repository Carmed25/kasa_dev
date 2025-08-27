// import feuille de style

import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_link"><Link to='/' >Accueil</Link></li>
                <li className="navbar_link"><Link to='/about' >A propos</Link></li>
            
           </ul>
        </nav>
    );
}