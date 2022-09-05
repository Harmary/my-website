export function Card(card){
    return(
        <div className="card">
            <img alt="картинка навыка" src={card.img}></img>
            <h3 className="subtitle">{card.subtitle}</h3>
            <p className="text">{card.text}</p>
        </div>
    )
}