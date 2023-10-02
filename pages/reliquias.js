import { useState, useEffect } from 'react';

export default function Reliquias() {
  const [reliquias, setReliquias] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anxious-puce-cloak.cyclic.cloud/reliquias`)
      .then((response) => response.json())
      .then((data) => {
        setReliquias(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <h1>Carregando</h1>;

  return (
    <table id="inventario-reliquias">
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Tag</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {reliquias.map((item, index) =>
          item.categoria.split(';').map((efeito, efeitoIndex) => (
            <tr key={index + '-' + efeitoIndex}>
              {efeitoIndex === 0 ? (
                <>
                  <td rowSpan={item.categoria.split(';').length}>
                    <img
                      src={`/static/images/reliquias/${item.nome.toLowerCase()}.jpg`}
                      alt={item.nome}
                    />
                  </td>
                  <td rowSpan={item.categoria.split(';').length}>
                    {item.nome}
                  </td>
                </>
              ) : null}
              <td>{efeito}</td>
              <td>{item.descricao.split(';')[efeitoIndex]}</td>
            </tr>
          ))
        )}
        {/* {reliquias.map((reliquia, r) => (
          <tr key={r}>
            <td>
              <img
                src={`/static/images/reliquias/${reliquia.nome.toLowerCase()}.jpg`}
                alt={reliquia.nome}
              />
            </td>
            <td>{reliquia.nome}</td>
            <td>
              {reliquia.categoria.split(';').map((tag, t) => (
                <p key={t}>{tag}</p>
              ))}
            </td>
            <td>
              {reliquia.descricao.split(';').map((desc, d) => (
                <p key={d}>{desc}</p>
              ))}
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}
