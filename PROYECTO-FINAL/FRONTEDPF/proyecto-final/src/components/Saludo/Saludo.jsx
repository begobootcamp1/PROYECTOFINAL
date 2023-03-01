import React from "react";
import "./Saludo.css";

export default function Saludo() {
  const [curDate, setCurDate] = React.useState(new Date().getHours());
  const [cssStyle, setCssStyle] = React.useState({});
  const [greeting, setGreeting] = React.useState("");

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurDate(new Date().getHours());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  React.useEffect(() => {
    if (curDate >= 1 && curDate < 12) {
      setGreeting("Buenos días");
      setCssStyle({ color: "green" });
    } else if (curDate >= 12 && curDate < 19) {
      setGreeting("Buenas tardes");
      setCssStyle({ color: "orange" });
    } else {
      setGreeting("Buenas noches");
      setCssStyle({ color: "black" });
    }
  }, [curDate]);

  return (
    <>
      <h1 contentEditable={true} className="saludo">
        Hola María, <span style={cssStyle}>{greeting}</span>
      </h1>
    </>
  );
}
