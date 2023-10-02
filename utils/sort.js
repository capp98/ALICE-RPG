export default function ordenarNome(a, b) {
  const nomeA = a.nome.toUpperCase();
  const nomeB = b.nome.toUpperCase();

  if (nomeA < nomeB) return -1;
  if (nomeA > nomeB) return 1;

  return 0;
}
