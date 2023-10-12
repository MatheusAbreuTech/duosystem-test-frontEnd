# Desafio Duosystem

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Zod](https://img.shields.io/badge/-Zod-3068b7?style=for-the-badge&logo=Zod&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-572e3e?style=for-the-badge&logo=react&logoColor=white)
![ReactHookForm](https://img.shields.io/badge/-ReactHookForm-ec5990?style=for-the-badge&logo=ReactHookForm&logoColor=white)

Este projeto foi criado como parte do processo seletivo para a posição de desenvolvedor Front-end na Duosystem. O desafio proposto envolve a construção de uma aplicação de lista de tarefas, conhecida como ToDo List. Nesta aplicação, os principais recursos incluem a capacidade de listar tarefas, adicionar novas tarefas, aplicar filtros para visualização, editar as tarefas existentes, marcar tarefas como concluídas e excluir tarefas.

Além disso, o desafio impôs a obrigação de usar as seguintes tecnologias: Zod, Zustand e React Hook Form.

## Links online

[Site rodando deploy do projeto](https://duosystem-test-front-end.vercel.app/)

[Site rodando deploy do Storybook do projeto](https://matheusabreutech.github.io/desafio-duosystem-storybook)

## Pré-requisitos

- Node.js (versão 14.6.0 ou superior)
- npm (geralmente vem com o Node.js) ou Yarn
- git (opcional, para clonar o repositório)

## Como Rodar Localmente

1.  Clone este repositório (ou faça o download do ZIP):

    ```bash
    git clone https://github.com/MatheusAbreuTech/duosystem-test-frontEnd.git
    ```

2.  Acesse o diretório do projeto:

    ```bash
    cd duosystem-test-frontEnd
    ```

3.  Instale as dependências com npm:

    ```bash
    npm install
    ```

    Ou, instale com Yarn:

    ```bash
    yarn
    ```

4.  Execute o servidor de desenvolvimento do Next.js com npm:

    ```bash
    npm run dev
    ```

    Ou, com Yarn:

    ```bash
    yarn dev
    ```

    O aplicativo estará disponível em http://localhost:3000.

Nota: Caso queira executar **npm start** ou **yarn start** é necessário realizar **npm run build** ou **yarn build** primeiro.

## Como Executar o Storybook

1.  Certifique-se de estar no diretório do projeto:

    ```bash
    cd duosystem-test-frontEnd
    ```

2.  Execute o Storybook com npm:

    ```bash
    npm run storybook
    ```

    Ou, com Yarn:

    ```bash
    yarn storybook
    ```

    O Storybook estará disponível em http://localhost:6006.

## Como Rodar os Testes Unitários

1. Para rodar os testes utilizando Jest e React Testing Library, certifique-se de estar no diretório do projeto:

   ```bash
   cd duosystem-test-frontEnd
   ```

2. Execute os testes com npm:

   ```bash
   npm test
   ```

   Ou, com Yarn:

   ```bash
   yarn test
   ```

## Scripts Disponíveis

- **npm run dev** ou **yarn dev**: Inicia o servidor de desenvolvimento do Next.js.
- **npm run build** ou **yarn build**: Compila o aplicativo Next.js para produção.
- **npm start** ou **yarn start**: Inicia o aplicativo compilado.
- **npm run storybook** ou **yarn storybook**: Inicia o Storybook.
- **npm test** ou **yarn test**: Executa os testes utilizando Jest e React Testing Library.
