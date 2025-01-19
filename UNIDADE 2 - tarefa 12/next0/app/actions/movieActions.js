"use server";

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey");
    const yearSearchKey = formData.get("yearSearchKey"); // Novo campo para ano

    if (!titleSearchKey || titleSearchKey === "") return { Search: [] };

    try {
        const queryParams = new URLSearchParams({
            apikey: "f1cbc41e",
            s: titleSearchKey,
        });

        // Adicionar o filtro de ano, se fornecido
        if (yearSearchKey && yearSearchKey !== "") {
            queryParams.append("y", yearSearchKey);
        }

        const httpRes = await fetch(`http://www.omdbapi.com/?${queryParams.toString()}`);
        const jsonRes = await httpRes.json();
        return jsonRes;
    } catch (err) {
        return { error: `Erro na requisição ${err}` };
    }
}
