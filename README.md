## Como rodar

Clone o repositório:
```
git clone git@github.com:queite/newsletter.git
```
Entre na pasta raiz:
```
cd newsleter
```
Instale as depenências:
```
npm install
```
Renomeie o arquivo .env.example para .env <br>
Preencha com os dados do e-mail que usará para enviar as mensagens<br>

Rode a aplicação:
```
npm start
```
Esse último comando inicializará um banco sqlite e a aplicação

<br>

## Cadastro de usuário e notícias via api
Usuário:
* Acesse a rota POST localhost:3000/user
* Insira corpo no seguinte formato:
  ```
  {
    "user": "fulano",
    "email": "teste@teste.com",
    "birthdate": "2000-11-08"
  }
  ```
<br>

Notícias:
* localhost:3000/news
* Insira corpo no seguinte formato:
  ```
  {
    "title": "Título da notícia",
    "description": "Descrição da notícia",
    "link": "Link da notícia"
  }
  ```
<br>
Caso utilize o VSCode e a extensão Thunder Client essas rotas já estão configuradas, basta preencher o corpo com os seus dados.

<br>

## Envio diário de e-mail com as novas notícias
* O envio ocorre automaticamente enquanto a api estiver rodando.
* Para tanto foi utilizado o [Node Cron](https://www.npmjs.com/package/node-cron)
* O envio dos e-mail é realizado pelo [Nodemailer](https://nodemailer.com/about/)

<br>

## 🛠️ Ferramentas
* [SQLite](https://www.sqlite.org/index.html)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)
* [Node Cron](https://www.npmjs.com/package/node-cron)
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
* [Nodemailer](https://nodemailer.com/about/)
<br>