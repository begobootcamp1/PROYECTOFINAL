import "./Reloj.css";
import React, { useEffect, useState } from "react";
import Reloj from "react-clock";
import "react-clock/dist/Clock.css";

export default function RelojAnalogico() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relojAnalogico">
      <Reloj value={value} size={200} />
    </div>
  );
}
