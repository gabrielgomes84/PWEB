"use client";

import { useState } from "react";
import MovieForm from "../movieSearch/page";

export default function MoviesPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (formData) => {
        setIsLoading(true);

        const titleSearchKey = formData.get("titleSearchKey") || "";
        const year = formData.get("year") || "";

        const url = `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${year}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "True") {
            setSearchResults(data.Search);
        } else {
            setSearchResults([]);
        }

        setIsLoading(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Busca de Filmes</h1>

            {/* Formulário de busca */}
            <MovieForm onSubmit={handleSearch} />

            {/* Resultados da busca */}
            {isLoading ? (
                <p>Carregando...</p>
            ) : searchResults.length > 0 ? (
                <div style={{ marginTop: "20px" }}>
                    {searchResults.map((movie) => (
                        <div
                            key={movie.imdbID}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <img
                                src={
                                    movie.Poster !== "N/A"
                                        ? movie.Poster
                                        : "https://via.placeholder.com/100x150?text=No+Image"
                                }
                                alt={`Poster de ${movie.Title}`}
                                style={{
                                    width: "100px",
                                    height: "150px",
                                    marginRight: "20px",
                                }}
                            />
                            <div>
                                <strong>{movie.Title}</strong> --- {movie.Year}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum resultado encontrado.</p>
            )}
        </div>
    );
}
