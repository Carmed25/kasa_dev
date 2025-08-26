//import logo
import './Footer.scss'
import logoWhite from '../../assets/logoWhiteDesktop.svg'


export default function Footer(){
    return(
        <div className='footer'>
            <img className='' src={logoWhite} alt='Logo Kasa Blanc'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}