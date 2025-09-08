//import logo
import './Footer.scss'
import logoWhite from '../../assets/logoWhiteDesktop.svg'


export default function Footer(){
    return(
        <div className='footer'>
            <img className='footer_logo' src={logoWhite} alt='Logo Kasa Blanc'/>
            <p className='footer_p'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}