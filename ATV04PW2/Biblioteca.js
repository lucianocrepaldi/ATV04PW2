// Lista para armazenar os títulos dos livros
let listaLivros = [];

// Mapa para armazenar autores dos livros (chave: título, valor: autor)
let mapaAutores = new Map();

// Conjunto para armazenar os gêneros dos livros
let conjuntoGeneros = new Set();

/**
 * Adiciona um livro à lista e ao mapa, e adiciona o gênero ao conjunto.
 * @param {string} titulo - O título do livro.
 * @param {string} autor - O autor do livro.
 * @param {string} genero - O gênero do livro.
 */
function adicionarLivro(titulo, autor, genero) {
    if (!listaLivros.includes(titulo)) {
        listaLivros.push(titulo);
        mapaAutores.set(titulo, autor);
        conjuntoGeneros.add(genero);
        console.log(`Livro "${titulo}" adicionado com sucesso.`);
    } else {
        console.log(`O livro "${titulo}" já está na lista.`);
    }
}

/**
 * Remove um livro da lista e do mapa.
 * @param {string} titulo - O título do livro a ser removido.
 */
function removerLivro(titulo) {
    if (listaLivros.includes(titulo)) {
        listaLivros = listaLivros.filter((livro) => livro !== titulo);
        mapaAutores.delete(titulo);
        console.log(`Livro "${titulo}" removido com sucesso.`);
    } else {
        console.log(`O livro "${titulo}" não está na lista.`);
    }
}

/**
 * Exibe todos os livros na lista.
 */
function listarLivros() {
    if (listaLivros.length === 0) {
        console.log("Nenhum livro disponível.");
    } else {
        console.log("Livros disponíveis:");
        listaLivros.forEach((titulo) => {
            console.log(`- ${titulo} (Autor: ${mapaAutores.get(titulo)})`);
        });
    }
}

/**
 * Verifica se um livro está disponível.
 * @param {string} titulo - O título do livro.
 * @returns {boolean} - Retorna true se o livro estiver na lista, false caso contrário.
 */
function verificarDisponibilidade(titulo) {
    const disponivel = listaLivros.includes(titulo);
    console.log(
        disponivel
            ? `O livro "${titulo}" está disponível.`
            : `O livro "${titulo}" não está disponível.`
    );
    return disponivel;
}

/**
 * Retorna uma lista de títulos de livros que pertencem ao gênero especificado.
 * @param {string} genero - O gênero a ser buscado.
 * @returns {Array<string>} - Lista de títulos de livros do gênero especificado.
 */
function buscarLivrosPorGenero(genero) {
    const livrosGenero = listaLivros.filter(
        (titulo) => mapaAutores.get(titulo) === genero
    );
    if (livrosGenero.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livrosGenero.forEach((titulo) => console.log(`- ${titulo}`));
    }
    return livrosGenero;
}

// Exemplos de uso
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
adicionarLivro("1984", "George Orwell", "Distopia");
adicionarLivro("Dom Casmurro", "Machado de Assis", "Clássico");

listarLivros();

verificarDisponibilidade("1984");
verificarDisponibilidade("Harry Potter");

buscarLivrosPorGenero("Fantasia");
buscarLivrosPorGenero("Romance");

removerLivro("1984");
listarLivros();
