// import feuille de style

import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Navbar(){
    return(
        <nav>
            <Link to='/' >Accueil</Link>
            <Link to='/about' >A propos</Link>
        </nav>
    );
}