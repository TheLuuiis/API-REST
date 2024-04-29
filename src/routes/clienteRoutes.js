const clienteController = require('../controllers/clienteController');
const router = {
  '/clientes': {
    'GET': clienteController.listarClientes,
    'POST': clienteController.crearCliente,
    'PUT': clienteController.actualizarCliente
  }
};

module.exports = router;