import React, { useState, useEffect } from 'react';

export default function Diario({ personagem_id }) {
  const [diarios, setDiarios] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://giddy-ruby-starfish.cyclic.app/diario/${personagem_id}`)
      .then((response) => response.json())
      .then((data) => {
        setDiarios(data);
      })
      .catch((err) => setDiarios(''))
      .then(() => setIsLoading(false));
  }, [personagem_id]);

  if (isLoading)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Carregando...</h1>
    );
  if (diarios === '')
    return (
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        Você ainda não escreveu nada 😔
      </h1>
    );

  return (
    <div className="infos-window" id="diario">
      {diarios.map((diario, d) => (
        <article key={d}>
          <h1>{diario.titulo}</h1>
          <h4>{diario.data}</h4>
          <section dangerouslySetInnerHTML={{ __html: diario.cena }}></section>
        </article>
      ))}
    </div>
  );
}
