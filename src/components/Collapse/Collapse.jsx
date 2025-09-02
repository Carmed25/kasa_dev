
import './Collapse.scss'
import arrowTop from '../../assets/arrowTop.svg'
import { Children, useState } from 'react';

// clic sur chevron ouvre une fenetre 
export default function Collapse({title,children}){
    //state ( données - état):état initial fermé
    const [isOpen, setIsOpen]=useState(false);



    //comportements: quand clic , on inverse le résultat initial
    const handleClick=()=>{
        setIsOpen(!isOpen);
    
    }

    const chevronClass=`collapse-header_logo ${isOpen?'rotate':''}`

    //affichage ( render )
    return (
        <div className='collapse'>
            <div className='collapse-header'>
                <h1 className='collapse-header_title'>{title}</h1>
                <button onClick={handleClick}>
                    <img className={chevronClass} src={arrowTop} alt='Chevron'/></button>

             
            </div>

            {isOpen &&(
                <div className='collapse_content'>{children}</div>
            )}
        </div>
    )
}