import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import FilterGroup from "../components/FilterGroup/FilterGroup";
import products from "../data/products";
import "./ProductListingPage.css";

// preço que o cliente realmente paga
function precoFinal(produto) {
  return produto.priceDiscount > 0 ? produto.priceDiscount : produto.price;
}

function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const [ordem, setOrdem] = useState("");

  // busca vinda do cabeçalho: /products?filter=texto
  const busca = (searchParams.get("filter") || "").toLowerCase();

  let lista = products.filter((p) =>
    `${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(busca)
  );

  if (ordem === "menor") {
    lista = [...lista].sort((a, b) => precoFinal(a) - precoFinal(b));
  } else if (ordem === "maior") {
    lista = [...lista].sort((a, b) => precoFinal(b) - precoFinal(a));
  }

  return (
    <Layout>
      <div className="listing-page">
        <aside className="listing-filters">
          <select
            className="listing-sort"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
          >
            <option value="">Ordenar por</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>

          <div className="listing-filter-box">
            <h2>Filtrar por</h2>
            <hr />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Urban" },
                { text: "Casual" },
                { text: "Sunset" },
                { text: "Classic" },
                { text: "Run" },
              ]}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[{ text: "Camisetas" }, { text: "Calças" }, { text: "Tênis" }]}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[{ text: "Masculino" }, { text: "Feminino" }, { text: "Unisex" }]}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[{ text: "Novo" }, { text: "Usado" }]}
            />
          </div>
        </aside>

        <main className="listing-main">
          <Section title={`${lista.length} produtos encontrados`}>
            {lista.length > 0 ? (
              <ProductListing products={lista} />
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </Section>
        </main>
      </div>
    </Layout>
  );
}

export default ProductListingPage;