// Importando as funções exportadas de page.js
import { Saudacao, Despedida } from '../page';

function Rota1() {
  return (
    <div>
      <Saudacao />
      <Despedida />
    </div>
  );
}

// Exportação default para Next.js
export default Rota1;
