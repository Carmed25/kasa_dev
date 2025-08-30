import './Banniere.scss'
// on affiche h1 seuleement si un titre est fourni
export default function Banniere({image, title, opacity=0.6}){
    return(
        <div className='banContainer'>
            <img className='banner_img' src={image} alt='Bannière'/>
            <div className='banner_overlay' style={{opacity:opacity}}></div>
            {title && <h1 className='banner_title'>{title}</h1>}
        </div>

    );
}
