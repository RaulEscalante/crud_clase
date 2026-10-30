const db = require('../database');

const crearProveedor = (nombre, telefono, email, callback) => {
    const sql = 'INSERT INTO proveedores (nombre, telefono, email) VALUES (?, ?, ?)';

    db.query(sql, [nombre, telefono, email], callback);
};

// Listar proveedores
const listarProveedores = (callback) => {
    db.query('SELECT * FROM proveedores', callback);
};

// Actualizar proveedor
const actualizarProveedor = (id, nombre, telefono, email, callback) => {
    const sql = 'UPDATE proveedores SET nombre = ?, telefono = ?, email = ? WHERE id = ?';

    db.query(sql, [nombre, telefono, email, id], callback);
};

// Eliminar proveedor
const eliminarProveedor = (id, callback) => {
    const sql = 'DELETE FROM proveedores WHERE id = ?';

    db.query(sql, [id], callback);
};

// Exportar funciones
module.exports = {
    crearProveedor,
    listarProveedores,
    actualizarProveedor,
    eliminarProveedor
};