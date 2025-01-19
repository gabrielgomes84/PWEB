"use client";

export default function MovieForm({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    placeholder="Digite o título do filme"
                />
            </div>
            <div>
                <label htmlFor="idYear">Ano</label>
                <input
                    id="idYear"
                    name="year"
                    placeholder="Digite o ano (opcional)"
                />
            </div>
            <button type="submit">Pesquisar</button>
        </form>
    );
}
