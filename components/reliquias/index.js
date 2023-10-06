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
  }, [personagem_id]);

  if (isLoading)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        Buscando Relíquias
      </h1>
    );

  let reliquiasComPoderes = reliquias.filter((reliquia) => !!reliquia.poder);

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
          {reliquiasComAtributos.map((reliquia, i) =>
            Object.entries(reliquia.atributos).map(
              ([atributo, valor], atIndex) => (
                <tr key={i + '-' + atIndex}>
                  {atIndex === 0 ? (
                    <td rowSpan={Object.entries(reliquia.atributos).length}>
                      {reliquia.nome}
                    </td>
                  ) : null}
                  <td>
                    {valor.length > 0 ? (
                      valor.map((v, i) => <p key={i}>{v}</p>)
                    ) : (
                      <p key={atributo}>
                        <strong>{atributo}:</strong> {valor}
                      </p>
                    )}
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
