// Importar as bibliotecas
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Realizar a conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if(error) {
        console.log('Não foi possível se conectar ao banco de dados');
    }
    else {
        console.log('Conexão com o banco de dados realizada com sucesso!')
    }
})

module.exports = db;