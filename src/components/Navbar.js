export function NavBar () {
    return(
        <nav>
            <div className="container nav">
            <a href="#banner" className="subtitle logo">Мария Харламова</a>
            <ul className="navbar">
                <li><a className="text link" href="#banner">обо мне</a></li>
                <li><a className="text link" href="#skills">навыки</a></li>
                <li><a className="text link" href="#projects">проекты</a></li>
                <li><a className="text link" href="#contacts">контакты</a></li>
            </ul>
            <a className="secondary-button" href="">Шалость</a>
            </div>
        </nav>
    )
}