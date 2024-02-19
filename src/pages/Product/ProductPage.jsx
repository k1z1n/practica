import React from 'react';
import {useParams} from 'react-router-dom';
import productsData from '/src/productsData.js';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './ProductPage.css'
import CustomUrl from "../../components/CustomUrl/CustomUrl.jsx";
import elipse1 from '/products/ellipse1.svg'
import elipse2 from '/products/ellipse2.svg'
import elipse3 from '/products/ellipse3.svg'
import Size from "../../components/Size/Size.jsx";
import Button from "../../components/Button/Button.jsx";

const ProductPage = () => {
    const {productId} = useParams();
    const product = productsData.find((p) => p.id === Number(productId));
    const valuesString = `Главная, Каталог, ${product.title}`;
    if (!product) {
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="h1">Товар не найден</div>
                </div>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <Header/>
            <div className="product-page">
                <CustomUrl values={valuesString}/>
                <div className="detailed-info">
                    <div className="product-images">
                        <div className="left-images">
                            <img src={product.img} alt=""/>
                            <img src={product.img} alt=""/>
                            <img src={product.img} alt=""/>
                        </div>
                        <img className='kutak' src={product.img} alt=""/>
                    </div>
                    <div className="product-info">
                        <p className="product-title">{product.title}</p>
                        <p className="price">{product.price} ₽</p>
                        <p className="description">{product.description}</p>
                        <hr/>
                        <div className='color'>
                            <p className='gray-color'>Цвет</p>
                            <img src={elipse1} alt=""/>
                            <img src={elipse2} alt=""/>
                            <img src={elipse3} alt=""/>
                        </div>
                        <hr/>
                        <div className="size-block">
                            <p className='gray-color'>Размер</p>
                            <div className="size-selector">
                                <Size title='S'/>
                                <Size title='M'/>
                                <Size title='L'/>
                                <Size title='XL'/>
                            </div>
                        </div>
                        <hr/>
                        <div className="buttons">
                            <Button buttonText="В избранное" className="button-white"/>
                            <Button buttonText="В корзину" className="button-w100"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage;
