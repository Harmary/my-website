import bannerPhoto from '../assets/banner.png'

export function Banner (){
    return(
        <div id="banner" className="banner">
            <div className="banner__content container">
                <div className="banner__left">
                    <div className="banner__text">
                        <p>Разработчик интерфейсов</p>
                        <h1>Мария Харламова</h1>
                        <p>Занимаюсь UI/UX дизайном и фронтенд разработкой. Моя страсть - стремиться к новому, моя цель - дарить миру удобные и красивые программные продукты.</p>
                    </div>
                    <a src="#contacts" className="main-button">Написать</a>
                </div>
                <img alt="my photo" src={bannerPhoto}></img>
            </div>
        </div>
    );
}