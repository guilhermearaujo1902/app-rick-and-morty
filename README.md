
# Rick and Morty App

Este projeto é um aplicativo construído com **React.js**, **Next.js**, **TypeScript**, **RxJS**, **Redux**, **axios**, **react-query**, entre outras tecnologias. Ele consome a API do Rick and Morty e oferece algumas funcionalidades interativas para o usuário.

## Tecnologias Utilizadas

- React.js
- Next.js
- TypeScript
- RxJS
- Hooks
- react-query
- axios
- redux
- classnames
- jest
- testing-library

## Descrição do Projeto

O objetivo do projeto é criar um app capaz de consumir a API do Rick and Morty e fornecer interações úteis aos usuários, como:

- **Buscar Personagem:** Ao pesquisar um personagem, o usuário pode visualizar seu nome, gênero e foto.
- **Salvar Favorito:** Ao pesquisar, o usuário pode adicionar personagens aos seus favoritos.
- **Notificação de Não Existência:** Caso o personagem pesquisado não exista, o usuário será informado sobre isso.

## Funcionalidades

- **Buscar um personagem pelo nome**: O app permite buscar um personagem específico da API.
- **Exibir informações mínimas sobre o personagem**: Nome, gênero e foto são exibidos.
- **Salvar Favorito**: O usuário pode salvar personagens em uma lista de favoritos.
- **Contador de Favoritos**: O contador de favoritos no topo da página é atualizado em tempo real.
- **Visualizar Lista de Favoritos**: O usuário pode visualizar todos os personagens salvos como favoritos.
- **Remover Favoritos**: É possível remover personagens da lista de favoritos.

## Como Executar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/guilhermearaujo1902/app-rick-and-morty.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o aplicativo no seu navegador:

   ```text
   http://localhost:3000
   ```

## Executando Testes

Para executar os testes unitários, utilize o comando:

```bash
npm run test
```
