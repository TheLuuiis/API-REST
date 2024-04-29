const tipoProyectoController = require('../controllers/tipoProyectoController');
const router = {
  '/tipos-proyecto': {
    'GET': tipoProyectoController.listarTiposProyecto,
    'POST': tipoProyectoController.crearTipoProyecto,
    'PUT': tipoProyectoController.actualizarTipoProyecto
  }
};

module.exports = router;