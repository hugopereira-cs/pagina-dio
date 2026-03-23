# Clone de Páginas do Site da DIO

Este projeto é um clone de páginas do site da Digital Innovation One (DIO), desenvolvido como parte do curso de React da DIO. O objetivo foi recriar a interface e as funcionalidades de login, cadastro, home e feed, utilizando tecnologias modernas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

-   **React:** Biblioteca para construção de interfaces de usuário.
-   **Vite:** Ferramenta de build e desenvolvimento rápido.
-   **Styled-components:** Para estilização dos componentes.
-   **React Router Dom:** Para gerenciamento das rotas da aplicação.
-   **React Hook Form:** Para criação e validação de formulários.
-   **Yup:** Para validação de schemas de formulários.
-   **Axios:** Para realizar requisições HTTP para a API.
-   **JSON Server:** Para simular uma API REST.

## ⚙️ Funcionalidades

-   Página de Home
-   Página de Login
-   Página de Cadastro
-   Página de Feed (acessível após o login)

## 📦 Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    cd pagina-dio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor da API:**
    ```bash
    npm run api
    ```
    O servidor da API estará disponível em `http://localhost:8001`.

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila o projeto para produção.
-   `npm run lint`: Executa o linter para verificar o código.
-   `npm run preview`: Inicia um servidor para visualizar a build de produção.
-   `npm run api`: Inicia o servidor `json-server` para a API mock.
