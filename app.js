const express = require('express');

const app = express();
app.use(express.json());

const usuario = require('./models/usuario');

app.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;

    usuario.crearUsuario(nombre, email, (err, result) => {
        if (err) throw err;
        res.send('Usuario creado');
    });
});

app.get('/usuarios', (req, res) => {
    usuario.listarUsuarios((err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;

    usuario.actualizarUsuario(id, nombre, email, (err, result) => {
        if (err) throw err;
        res.send('Usuario actualizado');
    });
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    usuario.eliminarUsuario(id, (err, result) => {
        if (err) throw err;
        res.send('Usuario eliminado');
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});