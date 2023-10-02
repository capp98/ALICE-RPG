import React, { useState, useEffect } from 'react';

export default function Diario({ personagem_id }) {
  const [diarios, setDiarios] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anxious-puce-cloak.cyclic.cloud/diario/${personagem_id}`)
      .then((response) => response.json())
      .then((data) => {
        setDiarios(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Carregando...</h1>;

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
