const clienteController = require('../controllers/clienteController');
const express = require('express');

const router = express.Router();

router.get('/', clienteController.listarClientes);
router.post('/',clienteController.crearCliente);
router.put('/',clienteController.actualizarCliente);


module.exports = router;