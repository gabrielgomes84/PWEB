export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad', type = '', year = '', page = 1 } = searchParams;

    const url = `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&type=${type}&y=${year}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.Response || data.Response === 'False') {
        return <div>Nenhum resultado encontrado.</div>;
    }

    return (
        <div>
            <div>
                {data.Search.map((m) => (
                    <div key={m.imdbID} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/100x150?text=No+Image'} 
                            alt={`Poster de ${m.Title}`} 
                            style={{ width: '100px', height: '150px', marginRight: '20px' }} 
                        />
                        <div>
                            <strong>{m.Title}</strong> --- {m.Year}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
