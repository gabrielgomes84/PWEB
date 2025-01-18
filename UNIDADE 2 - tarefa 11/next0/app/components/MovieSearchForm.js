// components/MovieSearchForm.js

import React, { useState } from "react";

export default function MovieSearchForm({ handleAction, titleSearchKey, setTitleSearchKey, isLoading }) {
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
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
}
