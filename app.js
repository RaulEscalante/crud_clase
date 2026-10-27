
const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Conexion a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL:');

});

app.post('/usuarios',(req, res)=>{
    const {nombre, email} = req.body;

    const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';

    db.query(sql,[nombre, email], (err, result) => {
        if (err) throw err;
        res.send('Usuario creado');
    });
});

app.get('/usuarios', (req, res)=>{
    db.query('SELECT * FROM usuarios', (err, results) =>{
        if (err) throw err;
        res.json(results);
    });
});

app.put('/usuarios/:id', (req, res)=>{
    const {id} = req.params;
    const {nombre, email} = req.body;

    const sql ='UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?';
    db.query(sql, [nombre,email,id], (err, result) => {
        if (err) throw err;
        res.send('Usuario actualizado')
    });
});

app.delete('/usuarios/:id', (req,res) =>{
    const {id} = req.params;

    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Usuario eliminado')
    });
});

app.listen(3000, () =>{
    console.log('Servidor corriendo en http://localhost:3000')
});