import React, { useState } from 'react';

export default function Atributos({ ficha, valoresExtras }) {
  let { atributos, pericias } = ficha;
  let fields = Object.keys(pericias);
  let fieldsExtras = Object.keys(valoresExtras);

  return (
    <div className="infos-window" id="atributos">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Atributos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="forca">
            <th>Força</th>
            <td id="forca">
              {!valoresExtras['força']
                ? atributos['força']
                : atributos['força'] + valoresExtras['força']}
            </td>
          </tr>
          <tr className="inteligencia">
            <th>Inteligência</th>
            <td id="inteligencia">
              {!valoresExtras['inteligência']
                ? atributos['inteligência']
                : atributos['inteligência'] + valoresExtras['inteligência']}
            </td>
          </tr>
          <tr className="destreza">
            <th>Destreza</th>
            <td id="destreza">
              {!valoresExtras.destreza
                ? atributos.destreza
                : atributos.destreza + valoresExtras.destreza}
            </td>
          </tr>
          <tr className="sabedoria">
            <th>Sabedoria</th>
            <td id="sabedoria">
              {!valoresExtras.sabedoria
                ? atributos.sabedoria
                : atributos.sabedoria + valoresExtras.sabedoria}
            </td>
          </tr>
          <tr className="constituicao">
            <th>Constituição</th>
            <td id="constituicao">
              {!valoresExtras['constituição']
                ? atributos['constituição']
                : atributos['constituição'] + valoresExtras['constituição']}
            </td>
          </tr>
          <tr className="carisma">
            <th>Carisma</th>
            <td id="carisma">
              {!valoresExtras.carisma
                ? atributos.carisma
                : atributos.carisma + valoresExtras.carisma}
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Perícias</th>
          </tr>
        </thead>
        <tbody id="pericias">
          {fields.map((field, i) => (
            <tr key={i} className={field.split('/')[1]}>
              <th>{field.split('/')[0]}</th>
              <td>
                {atributos[field.split('/')[1]] +
                  pericias[field] +
                  (!valoresExtras[field.split('/')[0].toLowerCase()]
                    ? 0
                    : valoresExtras[field.split('/')[0].toLowerCase()]) +
                  (!valoresExtras[field.split('/')[1]]
                    ? 0
                    : valoresExtras[field.split('/')[1]])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Extras</th>
          </tr>
        </thead>
        <tbody id="extras">
          {fieldsExtras.map((field, i) => (
            <tr key={i}>
              <th>{field}</th>
              <td id={`extras=${field}`}>{valoresExtras[field]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
