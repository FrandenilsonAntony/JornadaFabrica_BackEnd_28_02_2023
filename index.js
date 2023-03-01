const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World Seja bem vindo volte sempre');
});

/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read(Single & All), Update Delete
CRUD: Criar, Ler(Individual e Tudo), Atualizar e Remover
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
- [DELETE] /mensagens/{id} - Remove uma mensagem pelo ID
*/

const mensagens = [
  "Primeira mensagem",
  "Segunda mensagem"  
];
// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) =>{
  res.send(mensagens)

});

//- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = mensagens[id];
  res.send(mensagem);

});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});