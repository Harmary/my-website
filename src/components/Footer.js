
export function Footer() {
    return(
        <div id="footer" className="footer">
            <h2>Остались вопросы? Давай свяжемся</h2>
            <div className="container contacts">
                <div id="firstcol" className="contacts__col">
                    <div className="contact">
                        <h3 className="subtitle">Telegram</h3>
                        <p className="text">@harmary1</p>
                    </div>
                    <div className="contact">
                        <h3 className="subtitle">Вконтакте</h3>
                        <p className="text">@harmary</p>
                    </div>
                </div>          
                <div id="secondcol" className="contacts__col">
                    <div className="contact">
                        <h3 className="subtitle">Почта</h3>
                        <p className="text">maria.h4rlamova@gmail.com</p>
                    </div>
                    <div className="contact">
                        <h3 className="subtitle">Резюме</h3>
                        <p className="text"><a href="#">Резюме разработчик</a><a href="#">Резюме дизайнер</a></p>
                    </div>
                </div>          
                <div id="thirdcol" className="contacts__col">
                    <div className="contact">
                        <h3 className="subtitle">Dribble</h3>
                        <p className="text">@harmary</p>
                    </div>
                    <div className="contact">
                        <h3 className="subtitle">Github</h3>
                        <p className="text">@harmary</p>
                    </div>
                </div>          
            </div>
        </div>
    );
};
