import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import BuyBox from "../components/BuyBox/BuyBox";
import ProductOptions from "../components/ProductOptions/ProductOptions";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import products from "../data/products";
import "./ProductViewPage.css";

const imagens = [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` }));

function ProductViewPage() {
  const { id } = useParams();
  const produto = products.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <Layout>
        <div className="product-view">
          <p>Produto não encontrado.</p>
        </div>
      </Layout>
    );
  }

  const recomendados = products.filter((p) => p.id !== produto.id).slice(0, 4);

  return (
    <Layout>
      <div className="product-view">
        <Gallery images={imagens} width="700" height="570" radius="4px" showThumbs />

        <BuyBox
          name={produto.name}
          reference={produto.reference}
          stars={produto.rating}
          rating={90}
          price={produto.price}
          priceDiscount={produto.priceDiscount}
          description={produto.description}
        >
          <p className="option-title">Tamanho</p>
          <ProductOptions options={["39", "40", "41", "42", "43"]} shape="square" radius="4px" type="text" />

          <p className="option-title">Cor</p>
          <ProductOptions options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]} shape="circle" type="color" />
        </BuyBox>
      </div>

      <Section title="Produtos recomendados" link={{ text: "Ver todos", href: "/products" }}>
        <ProductListing products={recomendados} />
      </Section>
    </Layout>
  );
}

export default ProductViewPage;