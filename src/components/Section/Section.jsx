import { Link } from "react-router-dom";
import "./Section.css";

// titleAlign: "left" (padrão) ou "center"
// link: { text, href } (opcional)
function Section({ title, titleAlign = "left", link, children }) {
  return (
    <section className="section">
      <div className={`section-header section-header--${titleAlign}`}>
        <h2>{title}</h2>
        {link && (
          <Link to={link.href} className="section-link">
            {link.text}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;