import React from 'react';
import './CartModal.css'
import img from '/cart/img.svg'
import promo from '/cart/promo.svg'
import arrow from '/cart/arrow.svg'
import Button from "../Button/Button.jsx";


const CartModal = ({cartModalRef}) => {
    return (
        <div className="cart-modal" ref={cartModalRef}>
            <div className="modal-up">
                Корзина
            </div>
            <div className="modal-down">
                <div className="down-left">
                    <div className="left-img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="left-info">
                        <div className="info-title">Хлопковый свитер</div>
                        <div className="info-size">Размер: <span>L</span></div>
                        <div className="info-color">Цвет: Белая</div>
                        <div className="info-price">5400.00 ₽</div>
                        <div className="delete">Удалить</div>
                    </div>
                </div>
                <div className="down-right">
                    <div className="right-title">
                        Сумма заказа
                    </div>
                    <div className="right-one">
                        <div>Цена товара</div>
                        <div>5400.00 ₽</div>
                    </div>
                    <div className="right-delivery">
                        <div>Доставка</div>
                        <div>0 ₽</div>
                    </div>
                    <hr/>
                    <div className="right-price">
                        <div>Итого</div>
                        <div>5400.00 ₽</div>
                    </div>
                    <div className="right-enter">
                        <input type="text" placeholder='Промокод'/>
                        <img src={promo} alt=""/>
                        <Button buttonText={'Ввод'} className={'button-grays'}/>
                    </div>
                    <div className="right-buy">
                        <Button buttonText={'Перейти к покупке'} className={'button-grays'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
