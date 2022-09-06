export function Card(props){
    return(
        <div className="card">
            <img width="200px" height="200px" alt="картинка навыка" src={props.card.img}></img>
            <h3 className="subtitle">{props.card.subtitle}</h3>
            <p className="text">{props.card.text}</p>
        </div>
    )
}