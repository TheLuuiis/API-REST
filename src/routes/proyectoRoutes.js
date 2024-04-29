const proyectoController = require('../controllers/proyectoController');
const router = {
  '/proyectos': {
    'GET': proyectoController.listarProyectos,
    'POST': proyectoController.crearProyecto,
    'PUT': proyectoController.actualizarProyecto
  }
};

module.exports = router;