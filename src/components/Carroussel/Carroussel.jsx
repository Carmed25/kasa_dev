import './Carroussel.scss'

import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import { useState } from 'react'


// const [a, setA]=useState(false);

//const handleClick=()=>{
//        setA(!a);
    
   // }

export default function Carroussel({pictures}){

    //etat initial et possibilité de modifier cet état avec setIndex
    const [index, setIndex]= useState(0); 


    const next =()=>{
            setIndex ((prevIndex)=> (prevIndex + 1) % pictures.length);
        };

    const prev=()=> {
       setIndex ((prevIndex)=>(prevIndex - 1 + pictures.length) % pictures.length);
    };
    console.log('Carroussel pictures:', pictures)
 

    //   {pictures.length > 1 &&(.....)}
    return(

        <div className='carroussel'>
          
            <img className='carroussel_cover' src={pictures[index]} alt={`Slide ${index+1}`}/>
                                                        
          
                 <img 
                 src={arrowLeft} 
                 alt='arrow-left' 
                 className='carroussel_arrow-left'
                onClick={prev} />
                 
                <img 
                src={arrowRight} 
                alt='arrow-right' 
                className='carroussel_arrow-right'
                onClick={next} />

        
    
            
            
        </div>
    )
}