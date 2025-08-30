import Card from '../Card/Card'
import './Gallery.scss'
import data from '../../data/logements.json'
//import { useState } from 'react'


export default function Gallery(){
   //const appartements=useState (data)
   return ( 
    <div className='gallery'>
    {data.map((appartement)=>( 
      <Card
         key={appartement.id} //utile seulement pour React pour savoir quel élément a été modifié
         id={appartement.id}
         title={appartement.title}
         cover ={appartement.cover}
      />
      ))}

    </div>
   
    
   )
}