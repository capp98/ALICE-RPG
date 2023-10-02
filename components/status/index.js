import React, { useState } from 'react';

export default function Status({ nome, ficha, valoresExtras }) {
  let { atributos } = ficha;
  let dt = atributos.destreza + 10;

  //VIDA
  let vidaEmPorcentagem =
    1.0 + (valoresExtras['% de vida'] ? valoresExtras['% de vida'] / 100 : 0);

  let hpMaximo =
    (40 + atributos.constituição * 2 + valoresExtras.vida) * vidaEmPorcentagem;

  //SANIDADE
  let sanidadeMaxima = valoresExtras.sanidade
    ? 25 + valoresExtras.sanidade
    : 25;

  //DEFESAS
  let armaduraExtra = valoresExtras.armadura ? valoresExtras.armadura : 0;

  let resistenciaMagicaExtra = valoresExtras['resistência mágica']
    ? valoresExtras['resistência mágica']
    : 0;

  let defesaExtra = valoresExtras.defesa ? valoresExtras.defesa : 0;

  let armadura = armaduraExtra + defesaExtra;
  let resistenciaMagica = resistenciaMagicaExtra + defesaExtra;
  return (
    <div id="imagem">
      <img
        id="foto"
        src={`/static/images/${ficha.nome.split(' ')[0]}.png`}
        alt={`Imagem do ${ficha.nome}`}
      />
      <div id="status">
        <table>
          <thead>
            <tr>
              <th colSpan="3" id="nome">
                {nome}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>DT</th>
              <th>Vida</th>
              <th>Sanidade</th>
            </tr>
            <tr>
              <td id="dt">{dt}</td>
              <td id="hp">
                {`${
                  ficha.hpatual > hpMaximo ? hpMaximo : ficha.hpatual
                } / ${hpMaximo}`}
              </td>
              <td id="sanidade">
                {`${
                  ficha.sanidadeatual > sanidadeMaxima
                    ? ficha.sanidadeatual
                    : ficha.sanidadeatual
                } / ${sanidadeMaxima}`}
              </td>
            </tr>
            <tr>
              <th>Armadura</th>
              <th>Resistência Mágica</th>
              <th>Inspiração</th>
            </tr>
            <tr>
              <td id="armadura">{armadura}</td>
              <td id="resistenciaMagica">{resistenciaMagica}</td>
              <td id="inspiracao">{ficha.inspiracao}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
