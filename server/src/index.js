// Importar as bibliotecas
const express = require('express');
const cors = require('cors');

// Importar as rotas
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const serviceRoutes = require('./routes/serviceRoutes.js');
const brandRoutes = require('./routes/brandRoutes.js');
const announcementRoutes = require('./routes/announcementRoutes.js');


// Iniciar o servidor e chamar as rotas
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/brand',brandRoutes);
app.use('/api/announcement',announcementRoutes);



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
})