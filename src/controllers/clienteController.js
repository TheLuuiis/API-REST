const Cliente = require('../models/clienteModel');

// Listamos todos los clientes
exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Creamos un nuevo cliente
exports.crearCliente = async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

// Actualizamos un cliente
exports.actualizarCliente = async (req, res) => {
    try {
      await Cliente.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Cliente actualizado correctamente.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };