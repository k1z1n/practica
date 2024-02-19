import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";
import CatalogPage from "./pages/Catalog/CatalogPage.jsx";
import './index.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}
