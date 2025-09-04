import './Card.scss'
import { Link } from 'react-router-dom'


export default function Card({title,cover,id}){
    return (
        <>
        <Link to={`flat/${id}`} className='card_container'>
        <div className='card_img'>
            <img src={cover} alt={title}/>
            <div className='gradient_overlay'></div>
            <div className='card_title'>{title}</div>
        </div>
        </Link>
       </>
    )
}