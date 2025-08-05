import React from "react";
import "./BotaoPersonalizado.css";

function BotaoPersonalizado({ texto, onClick }) {
  return (
    <button className="botao-personalizado" onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotaoPersonalizado;