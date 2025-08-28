import './Card.scss'


export default function Card({title,cover}){
    return (
        <>
        <div className='card_container'>
        <div className='card_img'>
            <img src={cover} alt={title}/>
            <div className='gradient_overlay'></div>
            <div className='card_title'>{title}</div>
        </div>
        </div>
       </>
    )
}