// app/novarota/componentes.js
export function Saudacao() {
    return <h3>Bem-vindo à Nova Rota!</h3>;
  }
  
  export function Mensagem() {
    return <p>Prepare-se para uma nova jornada de aprendizado!</p>;
  }
  


export function MariaPrea({ mensagem }) {
    return <h2>{mensagem}</h2>;
  }