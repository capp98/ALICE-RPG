import React, { useState, useEffect } from 'react';

export default function Reliquias({ personagem_id }) {
  const [reliquias, setReliquias] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anxious-puce-cloak.cyclic.cloud/reliquias/${personagem_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReliquias(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Buscando Relíquias</h1>;

  let reliquiasComPoderes = reliquias.filter((reliquia) => !!reliquia.poder);

  console.log(reliquiasComPoderes);
  let reliquiasComAtributos = reliquias.filter(
    (reliquia) => !!reliquia.atributos
  );

  console.log(reliquiasComAtributos);

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
            <th>Poder</th>
          </tr>
        </thead>
        <tbody id="table-reliquias">
          {reliquiasComPoderes.map((item, index) =>
            item.poder.map((poder, poderIndex) => (
              <tr key={index + '-' + poderIndex}>
                {poderIndex === 0 ? (
                  <td rowSpan={item.poder.length}>{item.nome}</td>
                ) : null}
                <td>{poder.descrição}</td>
                <td>{poder.dados}</td>
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
                {Object.entries(reliquia.atributos).map(([atributo, valor]) =>
                  valor.length > 0 ? (
                    valor.map((v, i) => <p key={i}>{v}</p>)
                  ) : (
                    <p key={atributo}>
                      <strong>{atributo}:</strong> {valor}
                    </p>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
