import ProductCard from "../ProductCard/ProductCard.jsx";
import './ProductsList.css'

export default function ProductsList({ products, limit, className }) {
    const limitedProducts = products.slice(0, limit);

    return (
        <div className={className}>
            {limitedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}