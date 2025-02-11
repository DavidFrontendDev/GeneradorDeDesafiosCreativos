import { useState } from "react";
import "./App.css";
import { desafios } from "./services/data";
function App() {
  const [desafio, setDesafio] = useState("");

  function desafioRandom() {
    const desafioRandom = desafios[Math.floor(Math.random() * desafios.length)];
    setDesafio(desafioRandom);
  }

  return (
    <>
      <header>
        <div className="gd-generar">
          <h2>Generador de Desafios Creativos 😂</h2>
          <button className="gd-boton-generar" onClick={() => desafioRandom()}>
            Generar
          </button>
          <div className="gd-crear">
            <input placeholder="Crea tu propio desafio..." />
            <button className="gd-boton-generar">Crear</button>
          </div>
          <button className="gd-fondo-oscuro">🌙🌞</button>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default App;
