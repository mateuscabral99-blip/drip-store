import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";

// images: [{ src }] | width/height: números em px | radius: ex. "4px"
// showThumbs: se existir, mostra as miniaturas | className: classe extra no elemento pai
function Gallery({ images, width, height, radius = "0px", showThumbs, className = "" }) {
  const [atual, setAtual] = useState(0);
  const ultimo = images.length - 1;

  return (
    <div className={`gallery ${className}`} style={{ width: width ? `${width}px` : "100%" }}>
      <div
        className="gallery-slide"
        style={{ height: height ? `${height}px` : "auto", borderRadius: radius }}
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${atual * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Imagem ${index + 1}`}
              style={{ height: height ? `${height}px` : "auto" }}
            />
          ))}
        </div>

        <button
          className="gallery-arrow gallery-arrow--left"
          onClick={() => setAtual(atual - 1)}
          disabled={atual === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          className="gallery-arrow gallery-arrow--right"
          onClick={() => setAtual(atual + 1)}
          disabled={atual === ultimo}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumb ${index === atual ? "selected" : ""}`}
              style={{ borderRadius: radius }}
              onClick={() => setAtual(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" width="117" height="95" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;