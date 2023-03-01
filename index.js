const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World Seja bem vindo volte sempre');
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});