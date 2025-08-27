import './Banniere.scss'
import imgBanHome from '../../assets/imgBanniereHome.jpg'

export default function Banniere(){
    return(
        <div className='banContainer'>
            <img className='banner_img' src={imgBanHome} alt='Bannière représentant une falaise au bord de la mer'/>
            <div className='banner_overlay'></div>
            <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
        </div>

    );
}
