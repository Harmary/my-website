import bannerPhoto from '../assets/banner.png'
import React, { useState } from 'react';

export function Banner (){
    const[pressedButton,setPressedButton] = useState(false)
    return(
        <div id="banner" className="banner">
            <div className="banner__content container">
                <div className="banner__left">
                    <div className="banner__text">
                        <p className='text'>Разработчик интерфейсов</p>
                        <h1>Мария Харламова</h1>
                        <p className='text'>Занимаюсь UI/UX дизайном и фронтенд разработкой. Моя страсть - стремиться к новому, моя цель - дарить миру удобные и красивые программные продукты.</p>
                    </div>
                    <a href="#footer" className={pressedButton?"main-button-pressed main-button":"main-button"} onClick={()=>setPressedButton(true)}>Написать</a>
                </div>
                <img alt="Мария Харламова" src={bannerPhoto}></img>
            </div>
        </div>
    );
}