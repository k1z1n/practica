import React from 'react';
import './Footer.css'
import CustomLink from "../Link/CustomLink.jsx";
import logo from '/src/assets/header/logo.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fficia deserunt
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="footer-menu">
                <p>МЕНЮ</p>
                <CustomLink title={"ГЛАВНАЯ"} className={'link animation'} address={"/"}/>
                <br/>
                <CustomLink title={"АКЦИИ"} className={'link animation'} address={"/"}/>
                <br/>
                <CustomLink title={"КАТАЛОГ"} className={'link animation'} address={"/catalog"}/>
                <br/>
                <CustomLink title={"КОНТАКТЫ"} className={'link animation'} address={"/"}/>
            </div>
            <div className="footer-contacts">
                <p>Контакты</p>
                <p className="title little">Остались вопросы? Напишите нам</p>
                <p className="title bold">infernoshop@gmail.com</p>
                <p className="title little">Нужна консультация? Позвоните нам</p>
                <p className="title bold">+7 987 405 45 45</p>
            </div>
        </footer>
    )
}
