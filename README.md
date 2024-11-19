Gerenciador de Biblioteca
Este projeto é um simples gerenciador de biblioteca desenvolvido em JavaScript. Ele permite adicionar, remover, listar livros, verificar sua disponibilidade e buscar livros por gênero.

Funcionalidades
Adicionar um livro: Permite adicionar livros à biblioteca, associando título, autor e gênero.
Remover um livro: Permite remover livros da biblioteca.
Listar livros: Exibe todos os livros cadastrados.
Verificar disponibilidade: Checa se um livro está disponível na biblioteca.
Buscar livros por gênero: Permite filtrar os livros de acordo com o gênero.
Estrutura de Dados
Lista de livros: Armazena os títulos dos livros.
Mapa de autores: Associa cada título ao autor correspondente.
Conjunto de gêneros: Armazena os gêneros únicos dos livros.
Como Rodar o Projeto
Pré-requisitos
Node.js instalado. Para verificar se o Node.js está instalado, execute:
bash
Copiar código
node -v
Se o Node.js não estiver instalado, baixe aqui.
Passos
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/gerenciador-biblioteca.git
Navegue até a pasta do projeto:

bash
Copiar código
cd gerenciador-biblioteca
Execute o código:

bash
Copiar código
node biblioteca.js
Exemplo de Uso
javascript
Copiar código
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
adicionarLivro("1984", "George Orwell", "Distopia");

listarLivros();

verificarDisponibilidade("1984");

buscarLivrosPorGenero("Fantasia");
