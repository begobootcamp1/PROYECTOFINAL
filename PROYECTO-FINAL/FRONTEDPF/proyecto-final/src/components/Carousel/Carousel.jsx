import "./Carousel.css";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/imagenes/allimagenes"
      );
      const jsonData = await response.json();
      setDatos(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <ReactResponsiveCarousel
        autoPlay
        interval={7000}
        transitionTime={7000}
        infiniteLoop
        showThumbs={false}
      >
        {datos.map((imagen, index) => (
          <div className="imagen-contenedor" key={index}>
            <img
              alt={`${imagen.textoImagen}`}
              src={`http://localhost:3000/${imagen.path}`}
              width="600px"
            />
            <h2 className="legend">{imagen.textoImagen}</h2>
          </div>
        ))}
      </ReactResponsiveCarousel>
    </>
  );
}
