import { Link } from "react-router-dom";

// title: título da coluna | informations: [{ text, link }]
function InfoColumn({ title, informations }) {
  return (
    <div className="info-column">
      <h4>{title}</h4>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoColumn;