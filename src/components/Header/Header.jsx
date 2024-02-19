// Header.jsx
import { useState, useRef, useEffect } from 'react';
import CustomLink from '../Link/CustomLink.jsx';
import CartModal from "../CartModal/CartModal.jsx";

import logo from '/src/assets/header/logo.svg';
import cart from '/src/assets/header/cart.svg';
import heart from '/src/assets/header/heart.svg';
import data from '/src/productsData.js';
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter the data based on the search term
        const results = data.filter(item =>
            item.title.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    const openCartModal = () => {
        setCartModalOpen(true);
    };

    const closeCartModal = () => {
        setCartModalOpen(false);
    };

    const cartModalRef = useRef();

    const handleClickOutside = (event) => {
        if (cartModalRef.current && !cartModalRef.current.contains(event.target)) {
            closeCartModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='header'>
            <div className="container">
                <div className="header-cont">
                    <div className="logo">
                        <CustomLink className={'logo'} address="/" title={<img src={logo} alt="" />} />
                    </div>
                    <div className="nav">
                        <CustomLink className={'link animation'} address="/" title={'главная'}/>
                        <CustomLink className={'link animation'} address="/catalog" title={'каталог'}/>
                        <CustomLink className={'link animation'} address="/" title={'акции'}/>
                        <CustomLink className={'link animation'} address="/" title={'контакты'}/>
                    </div>
                    <div className="bar">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Поиск товаров"
                        />
                        <div className="search-results">
                            {searchTerm.length >= 2 && searchResults.map(item => (
                                // eslint-disable-next-line react/jsx-key
                                <CustomLink key={item.id} className={'search'} address={'/product/' + item.id} title={item.title}/>
                            ))}
                        </div>
                        <CustomLink className={'logo'} address="/" title={<img src={heart} alt=""/>}/>
                        <img src={cart} alt="" onClick={openCartModal}/>
                    </div>
                </div>
            </div>
            {isCartModalOpen && <CartModal onClose={closeCartModal} cartModalRef={cartModalRef}/>}
        </header>
    );

}
