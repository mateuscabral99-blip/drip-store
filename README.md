# Digital Store

Projeto final do módulo Front-end do curso de Desenvolvimento FullStack: loja virtual desenvolvida em **React**, baseada na documentação "Digital Store" e no design do Figma "DRIP STORE - DIGITAL COLLEGE".

## Autor

- Mateus Cabral

## Páginas

- **Home** (`/`): carrossel de imagens, coleções em destaque e produtos em alta.
- **Listagem de produtos** (`/produtos` ou `/products`): ordenação por preço, filtros laterais (visuais) e busca pelo cabeçalho (`/products?filter=texto`).
- **Visualização do produto** (`/product/:id`): galeria com miniaturas, informações do produto, opções de tamanho e cor, botão de compra e produtos recomendados.

## Tecnologias

- React 19 + Vite
- React Router DOM
- CSS puro (um arquivo por componente)
- JavaScript

## Componentes

Logo, Header, Footer, InfoColumn, Section, ProductCard, ProductListing, Gallery, FilterGroup, ProductOptions e BuyBox, mais o Layout (Header + conteúdo + Footer) em `src/pages`.

## Como rodar o projeto

Pré-requisito: Node.js instalado.

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois acesse `http://localhost:5173`.

Para gerar a versão de produção: `npm run build`.

## Estrutura

```
src/
├── assets/        ícones e logos
├── components/    componentes reutilizáveis
├── data/          produtos de exemplo (products.js)
├── pages/         HomePage, ProductListingPage, ProductViewPage e Layout
├── App.jsx        rotas
└── main.jsx
```

## Observações

- Os produtos são dados locais (`src/data/products.js`); não há consumo de API.
- Os filtros da listagem são apenas visuais, como permitido no enunciado.