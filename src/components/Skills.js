import {Card} from './Card'
import analysis from '../assets/presentation2.png'
import design from '../assets/pen-tool.png'
import layout from '../assets/website-design 2.png'

export function Skills(){
    const cards = [
        {
            index:1,
            img: analysis,
            subtitle:'Анализ',
            text:'Анализ потребителя,  создание user flow и use cases'
        },
        {
            index:2,
            img: design,
            subtitle:'UI/UX Дизайн',
            text:'Создание удобного клиентоориентированного дизайна для вашего продукта в Figma'
        },
        {
            index:3,
            img: layout,
            subtitle:'Верстка',
            text:'Реализация клиентской части с помощью React. Создание лендингов в Tilda'
        }
    ];
       
    return(
        <div className="skills">
            <h2>Навыки</h2>
            <div className="container">
                <div className="skills__cards">
                    {
                    cards.map( (card,index) =>
                    <Card key={index} card={card}/>
                    )
                    }
                    
                </div>
            </div>
        </div>
    );
}