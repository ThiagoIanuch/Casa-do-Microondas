// Importar as bibliotecas e rotas
const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const userRoutes = require('./routes/userRoutes.js');

// Iniciar o servidor
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
})