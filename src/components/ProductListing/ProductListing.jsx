import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

// products: [{ id, name, image, price, priceDiscount }]
function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;