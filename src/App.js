import React from "react";
import "./App.css";
import ipatinga from "./assets/covid-19/cities/ipatinga.svg";
import useWidthSize from "./hooks/useWidthSize";

function App() {
  const width = useWidthSize() * 0.8;

  return (
    <div className="graphic-container">
      <img src={ipatinga} width={width} alt="graphic" />
    </div>
  );
}

export default App;
