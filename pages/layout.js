import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/personagens">Personagens</Link>
          <Link href="/reliquias">Relíquias</Link>
          <Link href="/status">Status</Link>
          <Link href="/">Atualizações</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
