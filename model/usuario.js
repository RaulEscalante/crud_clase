const db = require('../config/database');

// Crear usuario
const crearUsuario = (nombre, email, callback) => {
    const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';

    db.query(sql, [nombre, email], callback);
};

// Listar usuarios
const listarUsuarios = (callback) => {
    db.query('SELECT * FROM usuarios', callback);
};

// Actualizar usuario
const actualizarUsuario = (id, nombre, email, callback) => {
    const sql = 'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?';

    db.query(sql, [nombre, email, id], callback);
};

// Eliminar usuario
const eliminarUsuario = (id, callback) => {
    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql, [id], callback);
};

// Exportar funciones
module.exports = {
    crearUsuario,
    listarUsuarios,
    actualizarUsuario,
    eliminarUsuario
};