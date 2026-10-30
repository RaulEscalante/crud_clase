const express = require('express');

const app = express();
app.use(express.json());

const usuario = require('./models/usuario');
const proveedor = require('./models/proveedor');

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

app.post('/proveedores', (req, res) => {
    const { nombre, telefono, email } = req.body;

    proveedor.crearProveedor(nombre, telefono, email, (err, result) => {
        if (err) throw err;
        res.send('Proveedor creado');
    });
});

app.get('/proveedores', (req, res) => {
    proveedor.listarProveedores((err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.put('/proveedores/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, email } = req.body;

    proveedor.actualizarProveedor(id, nombre, telefono, email, (err, result) => {
        if (err) throw err;
        res.send('Proveedor actualizado');
    });
});

app.delete('/proveedores/:id', (req, res) => {
    const { id } = req.params;

    proveedor.eliminarProveedor(id, (err, result) => {
        if (err) throw err;
        res.send('Proveedor eliminado');
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});