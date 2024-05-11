import { useState, useEffect } from 'react';

export default function Reliquias() {
  const [reliquias, setReliquias] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [urlImagem, setUrlImagem] = useState();

  useEffect(() => {
    fetch(`https://anxious-puce-cloak.cyclic.cloud/reliquias`)
      .then((response) => response.json())
      .then((data) => {
        setReliquias(data.filter((reliquia) => !!reliquia.tag));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Carregando</h1>;

  return (
    <>
      <table id="inventario-reliquias">
        <thead>
          <tr>
            <th></th>
            <th>Tag</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody>
          {reliquias.map((reliquia, index) =>
            reliquia.tag.map((tag, tagIndex) => (
              <tr key={index + '-' + tagIndex}>
                {tagIndex === 0 ? (
                  <>
                    <td rowSpan={reliquia.tag.length}>
                      <img
                        onClick={() =>
                          setUrlImagem(
                            `/static/images/reliquias/${reliquia.nome.toLowerCase()}.jpg`
                          )
                        }
                        src={`/static/images/reliquias/${reliquia.nome.toLowerCase()}.jpg`}
                        alt={reliquia.nome}
                      />
                      {reliquia.nome}
                    </td>
                  </>
                ) : null}
                <td>{tag}</td>
                <td>
                  {!!reliquia.tag_descricao
                    ? reliquia.tag_descricao[tagIndex]
                    : ''}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {!!urlImagem && (
        <div onClick={() => setUrlImagem()} id="imagem">
          <img src={urlImagem} />
        </div>
      )}
    </>
  );
}

/*export default function Status() {
  return (
    <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
      {' '}
      Não há personagens para serem lembrados.
    </h1>
  );
}*/
