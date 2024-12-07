import "./contentCard.css"

const ContentCard = ( { imgaseUrl, title, information, tect, tags } ) =>{
    return(
        <div className="container card">
            <img src={imgaseUrl} alt="" />
            <span>{title}</span>
            <span>{information}</span>
            <span>{tect}</span>
            <span>{tags}</span>
        </div>
    )
}

export default ContentCard