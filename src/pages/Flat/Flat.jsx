
//import Header from '../../components/Header/Header'
//import Footer from '../components/Footer/Footer'
 

import './Flat.scss'
import { Navigate, useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Collapse from '../../components/Collapse/Collapse'
import Carroussel from '../../components/Carroussel/Carroussel'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'
import Host from '../../components/Host/Host'


export default function Flat(){
    //recupération de l'id dans l'url
    const params = useParams()
    const id = params.id //ou const{id}=useParams()
    const flat = data.find((item)=>item.id===id)

    if (!flat) return <Navigate to='/ErrorPage'/>


    //recupération du nombre total d'images
    // <carroussel> <contenu: (titre/tag) et (lieu/etoile) et (collapse collapse)>


    return(
        <div className='flat'>
            <Carroussel pictures={flat.pictures}/>
            <div className='blocUn'>

                <div className='titleTag'>
                    <div className='titleTag_title'>{flat.title}</div>
                    <div className='titleTag_location'>{flat.location}</div>
                    <Tags tags={flat.tags}/>

                </div>
                <div className='hostRating'>
                <Host name={flat.host.name} picture={flat.host.picture}/> 
                <Rating rating={parseInt(flat.rating)}/>
                </div>
            </div>
            <div className='blocDeux flatCollapse'>
                <Collapse title="Description" customWidth="582px">
                    <p>{flat.description}
                    </p>
                </Collapse>
                <Collapse title='Équipements' customWidth='582px'>
                    <ul>
                        {flat.equipments.map ((item, index)=>(
                        <li key={index}>
                            {item}
                        </li>))}
                    </ul>
                
                </Collapse>

            </div>
        </div>
    )
}
//parseInt pour etre sur d'avoir un nombre et non une chaine de caractères