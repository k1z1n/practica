import {useState} from "react";
import Filter from "../../components/Filter/Filter.jsx";
import productsData from '/src/productsData.js';
import './CatalogPage.css';
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import arrow from '/products/arrow.svg'
import Filtrated from "../../components/FIltrated/Filtrated.jsx";

export default function CatalogPage() {
    const [sorting, setSorting] = useState('default');

    const onSortingChange = (event) => {
        setSorting(event.target.value);
    };

    const sortProducts = (sorting, products) => {
        const productsCopy = [...products];
        switch (sorting) {
            case 'priceAscending':
                return productsCopy.sort((a, b) => a.price - b.price);
            case 'priceDescending':
                return productsCopy.sort((a, b) => b.price - a.price);
            case 'nameA':
                return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
            case 'nameZ':
                return productsCopy.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return productsCopy;
        }
    };

    const sortedProducts = sortProducts(sorting, productsData);

    return (
        <>
            <Header/>
            <div className="catalog-page">
                <div className='main-arrow'>Главная<img src={arrow} alt=""/></div>
                <div className="page-left">
                    <Filtrated/>
                    <div className="page-main">
                        <div className="main-filter">
                            Сортировать: <Filter sorting={sorting} onSortingChange={onSortingChange}/>
                        </div>
                        <div className="cards">
                            <ProductsList products={sortedProducts} limit={6} className={'products-list catalog'}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}