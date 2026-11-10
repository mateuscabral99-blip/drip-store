import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import products from "../data/products";
import "./HomePage.css";

const slides = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  src: `/home-slide-${n}.jpeg`,
}));

function HomePage() {
  return (
    <Layout>
      <Gallery images={slides} width="1440" height="681" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="collections">
          <img src="/collection-1.png" alt="Coleção 1" />
          <img src="/collection-2.png" alt="Coleção 2" />
          <img src="/collection-3.png" alt="Coleção 3" />
        </div>
      </Section>

      <Section title="Produtos em alta">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
}

export default HomePage;