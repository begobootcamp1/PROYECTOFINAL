import React from "react";
import "./Saludo.css";

export default function Saludo() {
  const rootElement = document.getElementById("root");
  let curDate = new Date();
  curDate = curDate.getHours();
  const cssStyle = {};
  let greeting = "";
  if (curDate >= 1 && curDate < 12) {
    greeting = "Buenos días";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Buenas tardes";
    cssStyle.color = "orange";
  } else {
    greeting = "Buenas noches";
    cssStyle.color = "Black";
  }

  <h1 contentEditable="true" className="h11">
    Hola María,<span style={cssStyle}>{greeting}</span>
  </h1>;
}
