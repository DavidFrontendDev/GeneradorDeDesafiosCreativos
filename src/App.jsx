import { useState } from "react";
import "./App.css";
import { desafios } from "./services/data";
import Desafio from "./components/Desafio";
function App() {
  const [desafio, setDesafio] = useState("");
  const [input, setInput] = useState("");
  const [oscuro, setOscuro] = useState(false);

  function desafioRandom() {
    const desafioRandom = desafios[Math.floor(Math.random() * desafios.length)];
    setDesafio(desafioRandom);
  }

  function recogerInput(e) {
    setInput(e.target.value);
  }
  function cambiarDesafio() {
    if (input !== "") {
      setDesafio(input);
      setInput("");
    }
  }

  return (
    <>
      <header>
        <div className={oscuro ? "gd-generar-blanco" : "gd-generar"}>
          <h2>Generador de Desafios Creativos 😂</h2>
          <button className="gd-boton-generar" onClick={() => desafioRandom()}>
            Generar
          </button>
          <div className={oscuro ? "gd-crear-blanco" : "gd-crear"}>
            <input
              onChange={recogerInput}
              placeholder="Crea tu propio desafio..."
            />
            <button onClick={cambiarDesafio} className="gd-boton-generar">
              Crear
            </button>
          </div>
          <button
            className={oscuro ? "gd-fondo-blanco" : "gd-fondo-oscuro"}
            onClick={() => setOscuro(!oscuro)}
          >
            {oscuro ? "🌙" : "🌞"}
          </button>
        </div>
      </header>
      <main>{desafio && <Desafio frase={desafio} modoOscuro={oscuro} />}</main>
    </>
  );
}

export default App;
