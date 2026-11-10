import starIcon from "../../assets/star-icon.svg";
import "./BuyBox.css";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// children: opções do produto (tamanhos, cores etc.)
function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  const temDesconto = priceDiscount > 0;

  return (
    <div className="buy-box">
      <h1>{name}</h1>
      <p className="buy-box-reference">{reference}</p>

      <div className="buy-box-rating">
        <span className="buy-box-stars">
          <img src={starIcon} alt="" width="14" height="14" />
          {stars}
        </span>
        <span className="buy-box-rating-text">({rating} avaliações)</span>
      </div>

      <div className="buy-box-prices">
        {temDesconto ? (
          <>
            <span className="buy-box-price-old">{formatarPreco(price)}</span>
            <span className="buy-box-price">{formatarPreco(priceDiscount)}</span>
          </>
        ) : (
          <span className="buy-box-price">{formatarPreco(price)}</span>
        )}
      </div>

      <p className="buy-box-description-title">Descrição do produto</p>
      <p className="buy-box-description">{description}</p>

      {children}

      <button type="button" className="buy-box-button">
        COMPRAR
      </button>
    </div>
  );
}

export default BuyBox;