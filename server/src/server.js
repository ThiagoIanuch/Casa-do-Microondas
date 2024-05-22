const express = require("express");
const authRoute = require('./routes/auth-route.js');

const app = express();

app.use(authRoute);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
})