const universidadController = require('../controllers/universidadController');
const router = {
  '/universidades': {
    'GET': universidadController.listarUniversidades,
    'POST': universidadController.crearUniversidad,
    'PUT': universidadController.actualizarUniversidad
  }
};

module.exports = router;