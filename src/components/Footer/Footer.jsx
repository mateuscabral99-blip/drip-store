import Logo from "../Logo/Logo";
import InfoColumn from "../InfoColumn/InfoColumn";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./Footer.css";

const informacoes = [
  { text: "Sobre Drip Store", link: "/sobre" },
  { text: "Segurança", link: "/seguranca" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/trabalhe-conosco" },
  { text: "Meus Pedidos", link: "/pedidos" },
];

const categorias = [
  { text: "Camisetas", link: "/produtos" },
  { text: "Calças", link: "/produtos" },
  { text: "Bonés", link: "/produtos" },
  { text: "Headphones", link: "/produtos" },
  { text: "Tênis", link: "/produtos" },
];

const contato = [
  { text: "Av. Exemplo, 1000 - Centro, Fortaleza - CE, 60000-000", link: "/contato" },
  { text: "(85) 0000-0000", link: "/contato" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <InfoColumn title="Informação" informations={informacoes} />
        <InfoColumn title="Categorias" informations={categorias} />
        <InfoColumn title="Contato" informations={contato} />
      </div>

      <hr />
      <p className="footer-copy">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
}

export default Footer;