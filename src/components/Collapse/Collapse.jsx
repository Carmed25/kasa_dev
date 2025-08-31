
import './Collapse.scss'
import arrowTop from '../../assets/arrowTop.svg'

// clic sur chevron ouvre une fenetre 
export default function Collapse(){
    return (
        <div className='collapse-container'>
            <h1 className='collapse-container_title'>Title</h1>
             <img className='collapse-container_logo' src={arrowTop} alt='Chevron'/>
        </div>
    )
}