// Importando as funções exportadas de page.js
import { Mensagem, Paragrafo } from '../page';

function Rota3() {
  return (
    <div>
      <Mensagem />
      <Paragrafo />
    </div>
  );
}

// Exportação default para Next.js
export default Rota3;
