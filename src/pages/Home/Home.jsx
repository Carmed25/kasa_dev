//import Header from '../../components/Header/Header'
//import Footer from '../components/Footer/Footer'


import './Home.scss'
import imgBanHome from '../../assets/imgBanniereHome.jpg'
import Gallery from '../../components/Gallery/Gallery'
import Banniere from '../../components/Banniere/Banniere'

export default function Home(){
    return(
        <>
            <Banniere
            image={imgBanHome} title="Chez vous, partout et ailleurs"/>
            <Gallery/>
        </>
    )
}