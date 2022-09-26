import React, { useEffect, useState } from "react";

const GAME_OPTIONS = {
  PIEDRA: "piedra",
  PAPEL: "papel",
  TIJERA: "tijera",
};

const GAME_RESULTS = {
  WIN: "Ganaste",
  LOSE: "Perdiste",
  TIE: "Empate",
};

const GAME_CONDITIONS = {
  [GAME_OPTIONS.PIEDRA]: {
    [GAME_OPTIONS.TIJERA]: GAME_RESULTS.WIN,
  },
  [GAME_OPTIONS.PAPEL]: {
    [GAME_OPTIONS.PIEDRA]: GAME_RESULTS.WIN,
  },
  [GAME_OPTIONS.TIJERA]: {
    [GAME_OPTIONS.PAPEL]: GAME_RESULTS.WIN,
  },
};

const GAME_STATES = {
  PLAYING: true,
  FINISH: false,
};

const random = () => {
  return Math.floor(Math.random() * 3);
};

const PiedraPapelTijeraV2 = () => {
  const [userSelection, setUserSelection] = useState("");
  const [iaSelection, setIaSelection] = useState("");
  const [result, setResult] = useState("");
  const [gameState, setGameState] = useState(GAME_STATES.PLAYING);

  const play = (userSelection) => {
    const iaSelection = Object.values(GAME_OPTIONS)[random()];

    if (userSelection === iaSelection) {
      setUserSelection(userSelection);
      setIaSelection(iaSelection);
      setResult(GAME_RESULTS.TIE);

      setGameState(GAME_STATES.FINISH);
      return;
    }

    const result =
      GAME_CONDITIONS[userSelection][iaSelection] || GAME_RESULTS.LOSE;

    setUserSelection(userSelection);
    setIaSelection(iaSelection);
    setResult(result);

    setGameState(GAME_STATES.FINISH);
  };

  const reset = () => {
    setUserSelection("");
    setIaSelection("");
    setResult("");

    setGameState(GAME_STATES.PLAYING);
  };

  useEffect(() => {
    if (gameState === GAME_STATES.FINISH) {
      setTimeout(() => {
        reset();
      }, 2000);
    }
  }, [gameState]);

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
          disabled={gameState === GAME_STATES.FINISH}
          onClick={() => {
            play(GAME_OPTIONS.PIEDRA);
          }}
        >
          👊
        </button>
        <button
          disabled={gameState === GAME_STATES.FINISH}
          onClick={() => {
            play(GAME_OPTIONS.PAPEL);
          }}
        >
          ✋
        </button>
        <button
          disabled={gameState === GAME_STATES.FINISH}
          onClick={() => {
            play(GAME_OPTIONS.TIJERA);
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

export default PiedraPapelTijeraV2;
