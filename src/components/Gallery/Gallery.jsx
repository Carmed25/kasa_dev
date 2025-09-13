import Card from '../Card/Card'
import './Gallery.scss'
import data from '../../data/logements.json'


export default function Gallery(){
   return ( 
    <div className='gallery'>
      
      {data.map((flat)=>( 
         <Card
            key={flat.id} //utile seulement pour React pour savoir quel élément a été modifié
            id={flat.id}
            title={flat.title}
            cover ={flat.cover}
         />
      ))}
     
    </div>
   
   )
}