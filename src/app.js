const express = require('express');
require('./db');
const ClienteRoutes = require('./routes/clienteRoutes')

const app = express();

app.use(express.json());

async function aplicacion() {
    await app.listen(4321);
    console.log("Mi puerto es el 4321");
}

app.get('/', (req, res) => {
    res.send("Conectado en la Web");
})

app.use('/cliente', ClienteRoutes);

aplicacion();