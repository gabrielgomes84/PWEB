// app/clientesMovies1/page.js

"use client";

// Importando o CSS gerado pelo Tailwind
import '../../styles/output.css';

// Importando hooks necessários do React
import { useState, useCallback } from "react";
import React from 'react'; // Adicione a importação do React
import MovieSearchForm from "../components/MovieSearchForm"; // Corrigido para um nível acima

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
      // Alterado para a sua API
      const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${title}`);
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
      <MovieSearchForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        isLoading={isLoading}
      />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

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
