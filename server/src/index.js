// Importar as bibliotecas
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Importar as rotas
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const serviceRoutes = require('./routes/serviceRoutes.js');
const brandRoutes = require('./routes/brandRoutes.js');
const announcementRoutes = require('./routes/announcementRoutes.js');
const serviceOrderRoutes = require('./routes/serviceOrderRoutes.js')
const contactRoutes = require('./routes/contactRoutes.js');

// Configurar o CORS para permitir cookies  
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

// Iniciar o servidor e chamar as rotas
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/announcement',announcementRoutes);
app.use('/api/service-order',serviceOrderRoutes);
app.use('/api/contact',contactRoutes);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
})