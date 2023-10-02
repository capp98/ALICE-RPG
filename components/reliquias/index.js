import React, { useState } from 'react';

export default function Reliquias({ ficha }) {
  let { reliquias } = ficha;
  let reliquiasComEfeitos = reliquias.filter((reliquia) => !!reliquia.efeitos);

  let reliquiasComAtributos = reliquias.filter(
    (reliquia) => !!reliquia.atributos
  );
  return (
    <div className="infos-window" id="reliquias">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Relíquias</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody id="table-reliquias">
          {reliquiasComEfeitos.map((item, index) =>
            item.efeitos.map((efeito, efeitoIndex) => (
              <tr key={index + '-' + efeitoIndex}>
                {efeitoIndex === 0 ? (
                  <td rowSpan={item.efeitos.length}>{item.nome}</td>
                ) : null}
                <td>{efeito.descrição}</td>
                <td>{efeito.dados}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Itens</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Buff</th>
          </tr>
        </thead>
        <tbody id="table-itens">
          {reliquiasComAtributos.map((reliquia, i) => (
            <tr key={i}>
              <td>{reliquia.nome}</td>
              <td>
                {Object.entries(reliquia.atributos).map(([atributo, valor]) => (
                  <p key={atributo}>
                    <strong>{atributo}:</strong> {valor}
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
