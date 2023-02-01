const Card = (props)=>{
    return (
        <div className="zodiac-card" id={props.image.order}>
            <img src={props.image.image_src[props.image.zodiac_name]} alt={props.image.zodiac_name}></img>
            <p>{props.image.zodiac_name}</p>
        </div>    
    )
}

export default Card;