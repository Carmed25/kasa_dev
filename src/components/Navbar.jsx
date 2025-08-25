// import feuille de style

import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to='/' >Accueil</Link>
            <Link to='/about' >A propos</Link>
        </nav>
    );
}