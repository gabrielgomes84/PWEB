// app/api/searchMovies/route.js

export async function GET(request) {
    // Pegando o título da chave de pesquisa
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey");
  
    // Dados simulados de filmes (substitua com sua lógica de banco de dados)
    const allMovies = [
      { imdbID: "1", Title: "O Rei Leão", Year: "1994" },
      { imdbID: "2", Title: "Vingadores", Year: "2012" },
      { imdbID: "3", Title: "Matrix", Year: "1999" },
    ];
  
    // Filtrando os filmes de acordo com o título
    const filteredMovies = allMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(titleSearchKey.toLowerCase())
    );
  
    return Response.json({
      Search: filteredMovies,
    });
  }
  