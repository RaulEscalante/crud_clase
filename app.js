
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');

// Registrar rutas
app.use('/usuarios', usuarioRoutes);
app.use('/proveedores', proveedorRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
