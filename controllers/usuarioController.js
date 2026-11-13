
const usuario = require('../models/usuario');

// Crear usuario
const crearUsuario = (req, res) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({
            mensaje: 'El nombre y el email son obligatorios'
        });
    }

    usuario.crearUsuario(nombre, email, (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al crear el usuario'
            });
        }

        res.status(201).json({
            mensaje: 'Usuario creado correctamente',
            id: result.insertId,
            nombre,
            email
        });
    });
};

// Listar usuarios
const listarUsuarios = (req, res) => {
    usuario.listarUsuarios((err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al obtener los usuarios'
            });
        }

        res.status(200).json(results);
    });
};

// Obtener usuario por ID
const obtenerUsuario = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    usuario.obtenerUsuario(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al obtener el usuario'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        res.status(200).json(results[0]);
    });
};

// Actualizar usuario
const actualizarUsuario = (req, res) => {
    const id = Number(req.params.id);
    const { nombre, email } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    if (!nombre || !email) {
        return res.status(400).json({
            mensaje: 'El nombre y el email son obligatorios'
        });
    }

    usuario.obtenerUsuario(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al consultar el usuario'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        usuario.actualizarUsuario(id, nombre, email, (err) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Error al actualizar el usuario'
                });
            }

            res.status(200).json({
                mensaje: 'Usuario actualizado correctamente',
                id,
                nombre,
                email
            });
        });
    });
};

// Eliminar usuario
const eliminarUsuario = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensaje: 'El ID proporcionado no es válido'
        });
    }

    usuario.eliminarUsuario(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al eliminar el usuario'
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        res.status(204).send();
    });
};

// Exportar controladores
module.exports = {
    crearUsuario,
    listarUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
};
