import React, { useEffect, useState } from "react";
import "./Desafio.css";

function Desafio({ frase, modoOscuro }) {
  return (
    <div className={modoOscuro ? "gd-desafio-blanco" : "gd-desafio"}>
      <h2>{frase}</h2>
    </div>
  );
}

export default Desafio;
