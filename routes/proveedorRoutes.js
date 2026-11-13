const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

// Rutas de proveedores
router.post('/', proveedorController.crearProveedor);
router.get('/', proveedorController.listarProveedores);
router.get('/:id', proveedorController.obtenerProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);



module.exports = router;