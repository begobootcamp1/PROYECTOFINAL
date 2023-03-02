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
      >
        {datos.map((imagen, index) => (
          <div key={index}>
            <img
              alt={`${imagen.textoImagen}`}
              src={`http://localhost:3000/${imagen.path}`}
              width="400px"
            />
            <div
              style={{
                alignItems: "center",
                display: "flex",
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

// export default function Carousel() {
//   let imagenesCarousel = [];
//   return (
//     <ReactResponsiveCarousel
//       autoPlay
//       interval="6000"
//       transitionTime="6000"
//       infiniteLoop

//     >
//       {imagenesCarousel.map((imagen) => (
//         <div key={imagen}>
//           <img alt="path" src={imagen} width="400px" />
//           <div style={{ alignItems: "center", display: "flex" }}>
//             <p style={{ fontSize: 24, textAlign: "center" }} className="legend">
//               {imagen.textoImagen}
//             </p>
//           </div>
//         </div>
//       ))}

//       <div className="boxFlechas">
//         {/* showIndicators renderArrowNext= */}
//         {(clickHandler, hasNext) => {
//           return (
//             hasNext && (
//               <button className="nav_btn nav_btn_right" onClick={clickHandler}>
//                 <svg>
//                   <use xlinkHref={sprite + "#right"}></use>
//                 </svg>
//               </button>
//             )
//           );
//         }}
//         {/* renderArrowPrev= */}
//         {(clickHandler, hasNext) => {
//           return (
//             hasNext && (
//               <button onClick={clickHandler} className="nav_btn nav_btn_left">
//                 <svg>
//                   <use xlinkHref={sprite + "#left"}></use>
//                 </svg>
//               </button>
//             )
//           );
//         }}
//       </div>
//       {/* <link rel="stylesheet" href="carousel.css" /> */}
//     </ReactResponsiveCarousel>
//   );
// }
