import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import miniCart from "../../assets/mini-cart.svg";
import "./Header.css";

function Header() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // /produtos e /products são a mesma página: o link "Produtos" fica ativo nas duas
  const produtosAtivo = pathname === "/produtos" || pathname === "/products";

  function pesquisar(event) {
    event.preventDefault();
    const termo = busca.trim();
    navigate(`/products?filter=${encodeURIComponent(termo)}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" aria-label="Página inicial">
          <Logo />
        </Link>

        <form className="header-search" onSubmit={pesquisar}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link to="/cadastro" className="header-signup">
            Cadastre-se
          </Link>
          <Link to="/login" className="header-login">
            Entrar
          </Link>
          <img src={miniCart} alt="Carrinho" width="24" height="24" />
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos" className={produtosAtivo ? "active" : ""}>
          Produtos
        </NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/pedidos">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;