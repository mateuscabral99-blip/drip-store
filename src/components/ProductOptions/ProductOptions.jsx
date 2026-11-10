import { useState } from "react";
import "./ProductOptions.css";

// options: array de textos (ex.: ["39","40"] ou cores ["#000","#C92071"])
// shape: "square" | "circle" | radius: ex. "4px" | type: "text" | "color"
function ProductOptions({ options, radius = "4px", shape = "square", type = "text" }) {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="product-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`product-option ${shape} ${type} ${selecionado === option ? "selected" : ""}`}
          style={{
            borderRadius: shape === "circle" ? "50%" : radius,
            backgroundColor: type === "color" ? option : "transparent",
          }}
          onClick={() => setSelecionado(option)}
          aria-label={option}
        >
          {type === "text" ? option : ""}
        </button>
      ))}
    </div>
  );
}

export default ProductOptions;