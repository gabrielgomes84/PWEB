import Link from 'next/link';

export default function Rota1Layout({ children }) {
  return (
    <div>
      <h1>Menu Rota 1</h1>
      <Link href="/rota1">Página Rota 1</Link> <br />
      <Link href="/rota2">Ir para Rota 2</Link> <br />
      <Link href="/rota3">Ir para Rota 3</Link> <br />
      <hr />
      {children} {/* Aqui o conteúdo da página Rota1 será renderizado */}
    </div>
  );
}
