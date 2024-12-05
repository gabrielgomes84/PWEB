// Função genérica para construir uma tabela
function criarTabela(dados, colunas) {
    const tabela = document.createElement("table");
    tabela.style.width = "100%";
    tabela.style.borderCollapse = "collapse";

    // Cabeçalho da tabela
    const thead = tabela.createTHead();
    const cabecalho = thead.insertRow();
    colunas.forEach(coluna => {
        const th = document.createElement("th");
        th.textContent = coluna;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.backgroundColor = "#f4f4f4";
        cabecalho.appendChild(th);
    });

    // Corpo da tabela
    const tbody = tabela.createTBody();
    dados.forEach(item => {
        const row = tbody.insertRow();
        colunas.forEach(coluna => {
            const td = row.insertCell();
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";
            td.textContent = item[coluna.toLowerCase().replace(" ", "_")];
        });
    });

    return tabela;
}
