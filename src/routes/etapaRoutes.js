const etapaController = require('../controllers/etapaController');
const router = {
  '/etapas': {
    'GET': etapaController.listarEtapas,
    'POST': etapaController.crearEtapa,
    'PUT': etapaController.actualizarEtapa
  }
};

module.exports = router;