
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

export default function ErrorPage(){
    return(
        <div className='errorPage'>
            <div className='errorPage_title'>404</div>
            <div className='errorPage_text'>Oups! La page que <br className='hidden'/> vous demandez n'existe pas.</div>
            <Link to={'/'} className='errorPage_link'>Retourner sur la page d’accueil</Link>
        </div>
    )
}