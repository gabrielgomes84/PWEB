import Link from 'next/link';

export default function Rota2Layout({ children }) {
  return (
    <div>
      <h1>Menu Rota 2</h1>
      <Link href="/rota1">Ir para Rota 1</Link> <br />
      <Link href="/rota2">Página Rota 2</Link> <br />
      <Link href="/rota3">Ir para Rota 3</Link> <br />
      <hr />
      {children} {/* Aqui o conteúdo da página Rota2 será renderizado */}
    </div>
  );
}
