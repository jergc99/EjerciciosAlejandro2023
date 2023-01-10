import React from "react";
import "../styles/Body.css";
import Cuadro from "./Cuadro";

function Body() {
  return (
    <>
      <div className="row">
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
      </div>
      <div className="row">
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
        <Cuadro></Cuadro>
      </div>
    </>
  );
}

export default Body;
