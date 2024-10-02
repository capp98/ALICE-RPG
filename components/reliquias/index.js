import React, { useState, useEffect } from 'react';

export default function Reliquias({ personagem_id }) {
  const [reliquias, setReliquias] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://alicerpg-api.onrender.com/reliquias/${personagem_id}`)
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
        <tbody id="table-reliquias">
          {reliquiasComPoderes.map((item, index) => (
            <>
              <tr className="reliquiaNome">
                <td colSpan="3">{item.nome}</td>
              </tr>
              {item.poder.map((poder, poderIndex) => (
                <tr key={poderIndex}>
                  <td colSpan="2">{poder.descrição}</td>
                  <td>{poder.dados}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            <th>Itens</th>
          </tr>
        </thead>
        <tbody id="table-itens">
          {reliquiasComAtributos.map((item, index) => (
            <>
              <tr className="reliquiaNome">
                <td>{item.nome}</td>
              </tr>
              {Object.entries(item.atributos).map(
                ([atributo, valor], atIndex) =>
                  valor.length > 0 ? (
                    valor.map((v, i) => (
                      <tr>
                        <td key={i}>{v}</td>
                      </tr>
                    ))
                  ) : (
                    <tr key={atributo}>
                      <td>
                        <strong>{atributo}:</strong> {valor}
                      </td>
                    </tr>
                  )
              )}
            </>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
