"use client";

import { searchMovies } from "../actions/movieActions";
import Form from "next/form";
import { useState } from "react";

export default function Home() {
    const [data, setData] = useState({});

    async function handleAction(formData) {
        const res = await searchMovies(formData);
        setData(res);
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction} />
            {data.Search && <MovieTable movies={data.Search} />}
        </div>
    );
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler}>
            <div>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Digite o título" />
            </div>
            <div>
                <label htmlFor="idYearSearchKey">Ano</label>
                <input id="idYearSearchKey" name="yearSearchKey" placeholder="Digite o ano" type="number" />
            </div>
            <button type="submit">Pesquisar</button>
        </Form>
    );
}

export function MovieTable({ movies }) {
    return (
        <div>
            <div>
                {movies.map((m) => (
                    <div key={m.imdbID}>
                        {m.Title} --- {m.Year}
                    </div>
                ))}
            </div>
        </div>
    );
}
