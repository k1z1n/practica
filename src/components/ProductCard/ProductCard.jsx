import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import Button from "../Button/Button.jsx";
import like from '/src/assets/products/like.svg';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.title}/>
                <p>{product.title}</p>
                <p>{product.price} ₽</p>
                <div className="product-add">
                    <Button buttonText={'В КОРЗИНУ'} className={'button opacity'}/>
                    <img src={like} alt={like}/>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
