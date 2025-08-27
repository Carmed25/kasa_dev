// import feuille de style , logo et navigation
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import logoRed from '../../assets/logoRedDesktop.svg'

export default function Header(){
    return(
        <div className='header'>
            <img className='' src={logoRed} alt='Logo rouge Kasa'  />
            <Navbar/>
        </div>
    );
}