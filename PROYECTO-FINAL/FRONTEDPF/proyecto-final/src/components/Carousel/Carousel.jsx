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
        interval={6000}
        transitionTime={6000}
        infiniteLoop
        showThumbs={false}
      >
        {datos.map((imagen, index) => (
          <div key={index}>
            <div
              style={{
                alignItems: "center",
                //display: "flex",
              }}
            >
              <p
                style={{ fontSize: 24, textAlign: "center" }}
                className="legend"
              >
                {imagen.textoImagen}
              </p>
            </div>
          </div>
        ))}
      </ReactResponsiveCarousel>
    </>
  );
}
