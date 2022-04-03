# Desafio proposto no bootcamp Agilizei

## Abaixo o desafio proposto:

Cenário que deve ser implementado

- Cadastrar um novo usuário

Fluxo do cenário de "Cadastrar um novo usuário":

- Acessar o site automation practice http://automationpractice.com

- Clicar no botão de Sign in

- Preencher as informações de e-mail (não pode ser repetido)

- Clicar no botão Create an Account

- Preencher as informações do formulário de cadastro

- Clicar no botão Register

- Validar que foi redirecionado para a url correta

- Validar exibição do texto 'Welcome to your account'

## Desenvolvimento do projeto

1 - Utilizado framework de automação cypress

2 - Os relatórios de testes são gerados pelo mochawesome

3 - Para gerar dados sempre aleatórios no cadastro foi utilizada a biblioteca chance

4 - GitHub actions configurado para que cada commit realizado rode a pipe de testes

5 - Podemos ver os relatórios no GH Pages pelo [link](https://benevenuto30.github.io/desafioBootcampAgilizei/)

## Projeto rodando

<p align="center">
    <img width="460" height="300" src="assets/cadastro.spec.js.gif">
</p>

## Como rodar o projeto

1 - Instalar na sua máquina o node

2 - Com o projeto clonado, entrar na raiz e rodar o comando npm install e aguardar todos os downloads serem feitos

3 - Para rodar os testes em modo hedless utilize o comando: "npm run cy:run". Ou para abrir o cypress runner utilize: "npm run cy:open"

4 - Os relatórios gerados estão dentro da pasta "mochawesome-report"

5 - O video da execução está dentro da pasta "videos"