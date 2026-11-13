
const db = require('../config/database');

// Crear proveedor
const crearProveedor = (nombre, telefono, email, callback) => {
    const sql = 'INSERT INTO proveedores (nombre, telefono, email) VALUES (?, ?, ?)';

    db.query(sql, [nombre, telefono, email], callback);
};

// Listar proveedores
const listarProveedores = (callback) => {
    db.query('SELECT * FROM proveedores', callback);
};

// Obtener proveedor por ID
const obtenerProveedor = (id, callback) => {
    const sql = 'SELECT * FROM proveedores WHERE id = ?';

    db.query(sql, [id], callback);
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
    obtenerProveedor,
    actualizarProveedor,
    eliminarProveedor
};
