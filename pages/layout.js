import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">1.3</Link>
          <Link href="/personagens">Personagens</Link>
          <Link href="/reliquias">Relíquias</Link>
          <Link href="/status">Status</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          Desenvolvido por <a href="https://github.com/capp98">Capp98</a>
        </p>
      </footer>
    </>
  );
}
