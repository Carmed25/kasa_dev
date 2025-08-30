//import Footer  from '../../components/Footer/Footer'
//import Header from '../../components/Header/Header'
import Banniere from '../../components/Banniere/Banniere'
import './About.scss'
import imgBanAbout from '../../assets/imgBanniereAPropos.jpg'
export default function About(){
    return(
        <div>
            <Banniere
            image={imgBanAbout} opacity={0.3}/>
            <p>a propos</p>
        </div>
    )
}