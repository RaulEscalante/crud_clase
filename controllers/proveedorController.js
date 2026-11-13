
const proveedor = require('../models/proveedor');

// Crear proveedor
const crearProveedor = (req, res) => {
    const { nombre, telefono, email } = req.body;

    if (!nombre || !telefono || !email) {
        return res.status(400).json({
            mensaje: 'El nombre, telefono y email son obligatorios'
        });
    }

    proveedor.crearProveedor(nombre, telefono, email, (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al crear el proveedor'
            });
        }

        res.status(201).json({
            mensaje: 'Proveedor creado correctamente',
            id: result.insertId,
            nombre,
            telefono,
            email
        });
    });
};

// Listar proveedores
const listarProveedores = (req, res) => {
    proveedor.listarProveedores((err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al obtener los proveedores'
            });
        }

        res.status(200).json(results);
    });
};

// Obtener proveedor por ID
const obtenerProveedor = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    proveedor.obtenerProveedor(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al obtener el proveedor'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Proveedor no encontrado'
            });
        }

        res.status(200).json(results[0]);
    });
};

// Actualizar proveedor
const actualizarProveedor = (req, res) => {
    const id = Number(req.params.id);
    const { nombre, telefono, email } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    if (!nombre || !telefono || !email) {
        return res.status(400).json({
            mensaje: 'El nombre, telefono y email son obligatorios'
        });
    }

    proveedor.obtenerProveedor(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al consultar el proveedor'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Proveedor no encontrado'
            });
        }

        proveedor.actualizarProveedor(id, nombre, telefono, email, (err) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Error al actualizar el proveedor'
                });
            }

            res.status(200).json({
                mensaje: 'Proveedor actualizado correctamente',
                id,
                nombre,
                telefono,
                email
            });
        });
    });
};

// Eliminar proveedor
const eliminarProveedor = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    proveedor.eliminarProveedor(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al eliminar el proveedor'
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Proveedor no encontrado'
            });
        }

        res.status(204).send();
    });
};

// Exportar controladores
module.exports = {
    crearProveedor,
    listarProveedores,
    obtenerProveedor,
    actualizarProveedor,
    eliminarProveedor
};