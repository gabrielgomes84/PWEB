// app/novarota/page.js

// Componente Saudacao dentro do arquivo page.js
export function Saudacao() {
    return <h3>Bem-vindo à Nova Rota!</h3>;
  }
  
  // Componente Mensagem dentro do arquivo page.js
  export function Mensagem() {
    return <p>Prepare-se para uma nova jornada de aprendizado!</p>;
  }
  
  // A página que vai usar os componentes
  export default function NovaRota() {
    return (
      <div>
        <h1>Bem-vindo à Nova Rota</h1>
        <Saudacao />
        <Mensagem />
      </div>
    );
  }
  