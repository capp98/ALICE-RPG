export default function Home() {
  return (
    <div id="logs">
      <table>
        <thead>
          <tr>
            <th colSpan="4">Novidades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>09/10/2023</th>
            <td>
              Versão <b>1.3</b> lançada
            </td>
          </tr>
          <tr>
            <th>02/10/2023</th>
            <td>Novo registro no diário do Lukas</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Versões</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2.0</th>
            <td>
              Disponibilização da aba <b>Universo</b> para acessar novas telas{' '}
              {''}
              <b>Bestiário</b>, <b>Relíquias</b>, <b>Locais</b> e{' '}
              <b>Divindades</b>
            </td>
          </tr>
          <tr>
            <th>1.5</th>
            <td>
              Disponibilização da Tela <b>Status</b> para acompanhar em tempo
              real o estado de todos os personagens
            </td>
          </tr>
          <tr>
            <th>1.3</th>
            <td>
              Melhoria na interface das <b>relíquias</b> dos <b>personagens</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
