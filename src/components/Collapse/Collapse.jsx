
import './Collapse.scss'
import arrowTop from '../../assets/arrowTop.svg'
import { useState } from 'react';


export default function Collapse({title,children, customWidth}){
    //state ( données - état):état initial fermé
    const [isOpen, setIsOpen]=useState(false);
    const chevronClass=`collapse-header_logo ${isOpen?'rotate':''}`

    //comportements: quand clic , on inverse le résultat initial
    const handleClick=()=>{
        setIsOpen(!isOpen);    
    }

    //affichage ( render )
    return (
        <div className='collapse' style={{width:customWidth || '100%'}}>
            <div className='collapse-header'>
                <h2 className='collapse-header_title'>{title}</h2>
                <button onClick={handleClick} className='collapse-header_button'>
                    <img className={chevronClass} src={arrowTop} alt='Chevron'/>
                </button>  
            </div>

            {isOpen &&(
                <div className='collapse-header_content'>{children}</div>
            )}
        </div>
    )
}