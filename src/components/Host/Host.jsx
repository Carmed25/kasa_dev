import './Host.scss'

export default function Host({name,picture}){
    return (
        <div className='host'>
            <p className='host_name'>{name}</p>
            <img className='host_picture' src={picture} alt={`Hôte:${name}`}/>

        </div>


    )
}