import Link from 'next/link';

export default function Rota3Layout({ children }) {
  return (
    <div>
      <h1>Menu Rota 3</h1>
      <Link href="/rota1">Ir para Rota 1</Link> <br />
      <Link href="/rota2">Ir para Rota 2</Link> <br />
      <Link href="/rota3">Página Rota 3</Link> <br />
      <hr />
      {children} {/* Aqui o conteúdo da página Rota3 será renderizado */}
    </div>
  );
}
