const Universidad = require('../models/universidadModel');

// Listamos todas las universidades
exports.lsitaruniversidades = async (req, res) => {
    try {
        const universidades = await Universidad.find();
        res.json(universidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

// Creamos una nueva universidad
exports.crearUniversidad = async (req, res) => {
    const universidad = new Universidad(req.body);
    try {
        const nuevaUniversidad = await universidad.save();
        res.status(201).json(nuevaUniversidad);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Actualizamos una universidad
exports.actualizarUniversidad = async (req, res) => {
    try {
      await Universidad.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Universidad actualizada correctamente.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };