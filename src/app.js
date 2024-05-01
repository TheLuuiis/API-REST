const express = require('express');
require('./db');
const ClienteRoutes = require('./routes/clienteRoutes')
const EtapaRoutes = require('./routes/etapaRoutes')
const ProyectoRoutes = require('./routes/proyectoRoutes')
const TipoProyectoRoutes = require('./routes/tipoProyectoRoutes')
const UniversidadRoutes = require('./routes/universidadRoutes')

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
app.use('/etapa', EtapaRoutes);
app.use('/proyecto', ProyectoRoutes);
app.use('/tipoProyecto', TipoProyectoRoutes);
app.use('/universidad', UniversidadRoutes);

aplicacion();