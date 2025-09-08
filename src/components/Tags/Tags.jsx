import './Tags.scss'

export default function Tags({tags}){
    return (
        <div className='tagsContainer'>
            {tags.map((tag, index)=>(
                <span key={index} className='tagsContainer_tag' title={tag}>
                    {tag.split(" ")[0]} 
                </span>
            ))
            }
        </div>
    )
}