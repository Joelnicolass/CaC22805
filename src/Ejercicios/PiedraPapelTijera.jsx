import React, { useEffect, useState } from "react";

const PiedraPapelTijera = () => {
  const [userSelection, setUserSelection] = useState("");
  const [iaSelection, setIaSelection] = useState("");
  const [result, setResult] = useState("");

  const options = ["piedra", "papel", "tijera"];

  const random = () => {
    return Math.floor(Math.random() * 3);
  };

  const play = (userSelection) => {
    const iaSelection = options[random()];

    if (userSelection === iaSelection) {
      setResult("Empate");
    } else if (userSelection === "piedra" && iaSelection === "tijera") {
      setResult("Ganaste");
    } else if (userSelection === "papel" && iaSelection === "piedra") {
      setResult("Ganaste");
    } else if (userSelection === "tijera" && iaSelection === "papel") {
      setResult("Ganaste");
    } else {
      setResult("Perdiste");
    }

    setUserSelection(userSelection);
    setIaSelection(iaSelection);
  };

  return (
    <div>
      <div>
        <h1>Piedra Papel Tijera</h1>
      </div>

      <div>
        <h3>
          Tu: {userSelection} | IA: {iaSelection}
        </h3>
      </div>

      <div>
        <button
          onClick={() => {
            play("piedra");
          }}
        >
          👊
        </button>
        <button
          onClick={() => {
            play("papel");
          }}
        >
          ✋
        </button>
        <button
          onClick={() => {
            play("tijera");
          }}
        >
          ✌️
        </button>
      </div>

      <div>
        <h3>Resultado: {result}</h3>
      </div>
    </div>
  );
};

export default PiedraPapelTijera;
