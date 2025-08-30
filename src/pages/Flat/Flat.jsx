
//import Header from '../../components/Header/Header'
//import Footer from '../components/Footer/Footer'


import './Flat.scss'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'

export default function Flat(){
    const params=useParams()
    const id = params.id //ou const{id}=useParams()


    return(
        <div>
            <p>ici aussi</p>
        </div>
    )
}