import { Link } from "react-router-dom";
import "./ProductCard.css";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ProductCard({ id, name, image, price, priceDiscount }) {
  const temDesconto = priceDiscount > 0;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={image} alt={name} width="292" height="321" />
      <h3>{name}</h3>
      <div className="product-card-prices">
        {temDesconto ? (
          <>
            <span className="price-old">{formatarPreco(price)}</span>
            <span className="price">{formatarPreco(priceDiscount)}</span>
          </>
        ) : (
          <span className="price">{formatarPreco(price)}</span>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;