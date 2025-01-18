"use client";

// Importando o CSS gerado pelo Tailwind
import '../../styles/output.css'; // Importa o CSS gerado pelo Tailwind

// Importando hooks necessários do React
import { useState, useCallback } from "react";
import React from 'react'; // Adicione a importação do React
import Form from "next/form";

// Componente principal da página
export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [titleSearchKey, setTitleSearchKey] = useState(""); // Estado para gerenciar a chave de pesquisa.
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o botão.

  // Função para buscar os filmes
  const handleAction = useCallback(async (formData) => {
    const title = formData.get("titleSearchKey");
    setIsLoading(true); // Desabilita o botão durante a requisição.
    try {
      const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${title}`);
      const jsonRes = await httpRes.json();
      setResultMovies(jsonRes.Search || []);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setIsLoading(false); // Reabilita o botão após a requisição.
    }
    setTitleSearchKey(""); // Zera o campo de pesquisa.
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        isLoading={isLoading}
      />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

// Componente do formulário com React.memo para evitar re-renderizações desnecessárias
export const MovieForm = React.memo(({ handleAction, titleSearchKey, setTitleSearchKey, isLoading }) => {
  console.log("Renderizando MovieForm");
  return (
    <form
      className="bg-white p-6 shadow-md rounded-lg w-full max-w-md mb-8"
      onSubmit={(e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página.
        const formData = new FormData(e.target);
        handleAction(formData);
      }}
    >
      <label htmlFor="idTitleSearchKey" className="block text-gray-700 font-medium mb-2">
        Título
      </label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={(e) => setTitleSearchKey(e.target.value)}
        disabled={isLoading} // Desabilita o campo durante o carregamento.
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite o título do filme"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 text-white font-bold rounded-lg ${
          isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Pesquisando..." : "Pesquisar"} {/* Texto dinâmico no botão */}
      </button>
    </form>
  );
});

// Componente da tabela
export function MovieTable({ movies }) {
  console.log("Renderizando MovieTable");
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados</h2>
      {movies.length > 0 ? (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 px-4 py-2">Título</th>
              <th className="border-b-2 border-gray-200 px-4 py-2">Ano</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m.imdbID}>
                <td className="border-b border-gray-200 px-4 py-2">{m.Title}</td>
                <td className="border-b border-gray-200 px-4 py-2">{m.Year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Nenhum filme encontrado.</p>
      )}
    </div>
  );
}
