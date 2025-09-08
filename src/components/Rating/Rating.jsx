import './Rating.scss'
import starActive from './../../assets/starActive.svg'
import starInactive from './../../assets/starInactive.svg'



export default function Rating({rating}){
    const stars =[1,2,3,4,5] // represente les 5 etoiles fixes 

    return(
        <div className='rating'>
            {stars.map((star)=>(
                <div className='rating_container'>
                <img className='rating_star'
                    key={star}
                    src={star <= rating ? starActive : starInactive}
                    alt={star <= rating ? 'Etoile pleine':'Etoile vide'}
                />
                </div>
            ))}


        </div>
    )
}