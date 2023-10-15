import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Status from '../components/status';
import ordenarNome from '../utils/sort';
import Atributos from '../components/atributos';
import Reliquias from '../components/reliquias';
import Diario from '../components/diario';
import Itens from '../components/itens';

export default function Home() {
  const router = useRouter();
  let nome = router.query.nome || '';

  const [personagem, setPersonagem] = useState(nome);
  const [reliquias, setReliquias] = useState();
  const [ficha, setFicha] = useState();
  const [visible, setVisible] = useState('atributos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://anxious-puce-cloak.cyclic.cloud/chars/${personagem.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFicha(data[0]);
        setIsLoading(false);
      });
  }, [personagem]);

  let valoresTotal = {};

  useEffect(() => {
    if (!!ficha) {
      fetch(`https://anxious-puce-cloak.cyclic.cloud/reliquias/${ficha.id}`)
        .then((response) => response.json())
        .then((data) => {
          setReliquias(data);
        });
    }
  }, [ficha]);

  if (!isLoading && !!reliquias) {
    reliquias.sort(ordenarNome);

    reliquias.forEach(({ atributos }) => {
      if (!atributos) return;
      let values = Object.keys(atributos);
      values.forEach((field) => {
        if (field === 'passivo') return;
        if (!valoresTotal[field]) valoresTotal[field] = 0;
        valoresTotal[field] += atributos[field];
      });
    });
  }

  if (!valoresTotal) return <h1>Carregando...</h1>;

  return (
    <>
      <nav>
        <a onClick={() => setPersonagem('Lukas Hysi')}>Lukas</a>
        <a onClick={() => setPersonagem('Nicole Freitas')}>Nicole</a>
        {personagem === 'Rafael DeWitt' ? (
          <a onClick={() => setPersonagem('Kael')}>Kael</a>
        ) : (
          <a onClick={() => setPersonagem('Rafael DeWitt')}>Rafael</a>
        )}
        <a onClick={() => setPersonagem('Violet Müller Bohn')}>Violet</a>
        <a onClick={() => setPersonagem('Zophise Monchèrt')}>Zophise</a>
        <a onClick={() => setPersonagem("Zenith Beifong D'weller")}>Zenith</a>
      </nav>
      {isLoading && personagem !== '' ? (
        <h1>Carregando...</h1>
      ) : personagem === '' ? (
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
          Clica em um nome para ver mais sobre o personagem 😀
        </h1>
      ) : (
        <div className="ficha">
          <Status
            nome={personagem}
            ficha={ficha}
            valoresExtras={valoresTotal}
          />
          <div id="infos">
            <nav>
              <ul>
                <li onClick={() => setVisible('atributos')}>Atributos</li>
                <li onClick={() => setVisible('reliquias')}>Relíquias</li>
                <li onClick={() => setVisible('itens')}>Itens</li>
                <li onClick={() => setVisible('diario')}>Diário</li>
              </ul>
            </nav>
            {visible === 'atributos' && (
              <Atributos ficha={ficha} valoresExtras={valoresTotal} />
            )}

            {visible === 'reliquias' && <Reliquias personagem_id={ficha.id} />}

            {visible === 'itens' && <Itens personagem_id={ficha.id} />}

            {visible === 'diario' && <Diario personagem_id={ficha.id} />}
          </div>
        </div>
      )}
    </>
  );
}
