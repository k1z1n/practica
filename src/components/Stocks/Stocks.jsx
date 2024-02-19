import './Stocks.css'
import CustomLink from "../Link/CustomLink.jsx";
import ProductsList from "../ProductsList/ProductsList.jsx";
import Button from "../Button/Button.jsx";
import productsData from '/src/productsData.js';

export default function Stocks(){
    return(
        <div className="stocks">
            <div className="stocks-up">
                <p>АКЦИИ</p>
                <CustomLink className={'link gray'} address="/catalog" title={'ПЕРЕЙТИ В КАТАЛОГ'}/>
            </div>
            <ProductsList limit={4} products={productsData} className={'products-list'}/>
            <div className= "stocks-button">
                <Button className={'button-gray'} buttonText={'ПОКАЗАТЬ ЕЩЕ'}/>
            </div>
        </div>
    )
}