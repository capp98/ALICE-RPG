import React, { useState } from 'react';

export default function Diario({ ficha }) {
  let { reliquias } = ficha;
  let reliquiasComAtributos = reliquias.filter(
    (reliquia) => !!reliquia.atributos
  );
  return (
    <div className="infos-window" id="diario">
      <a>
        <h1>Sessão</h1>
        <h4>01/10/2023</h4>
      </a>
      <a>
        <h1>Sessão</h1>
        <h4>01/10/2023</h4>
      </a>
      <a>
        <h1>Sessão</h1>
        <h4>01/10/2023</h4>
      </a>
    </div>
  );
}
