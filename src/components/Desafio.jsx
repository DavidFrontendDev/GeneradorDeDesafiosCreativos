import React, { useEffect, useState } from "react";
import "./Desafio.css";

function Desafio({ frase }) {
  return (
    <div className="gd-desafio">
      <h2>{frase}</h2>
    </div>
  );
}

export default Desafio;
