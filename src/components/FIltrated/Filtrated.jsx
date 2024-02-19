import './Filtrated.css'
import filter from '/catalog/filter.svg'
import arrowRight from '/products/arrow.svg'
import Size from "../Size/Size.jsx";
import arrowUp from '/catalog/arrow-up.svg'
import Button from "../Button/Button.jsx"
import range from '/catalog/range.svg'

export default function Filtrated() {
    return (
        <div className='filtrated'>
            <div className="filtrated-filtr">
                Фильтер <img src={filter} alt=""/>
            </div>
            <hr/>
            <div className="filtrated-pol">
                <div className="pol-pos">
                    Мужчины <img src={arrowRight} alt=""/>
                </div>
                <div className="pol-pos">
                    Женщины <img src={arrowRight} alt=""/>
                </div>
                <div className="pol-pos">
                    Аксессуары <img src={arrowRight} alt=""/>
                </div>
            </div>
            <hr/>
            <div className="filtrated-price">
                <div className="price-pos">
                    Цена<img src={arrowUp} alt=""/>
                </div>
                <img src={range} alt=""/>
            </div>
            <hr/>
            <div className="filtrated-size">
                <div className="size-up">
                    Размер <img src={arrowUp} alt=""/>
                </div>
                <div className="size-down">
                    <Size title={"XS"}/>
                    <Size title={"S"}/>
                    <Size title={"M"}/>
                    <Size title={"L"}/>
                    <Size title={"XL"}/>
                </div>
            </div>
            <div className="filtrated-button">
                <Button buttonText={"Применить"} className={"button-grays"}/>
            </div>
        </div>
    )
}