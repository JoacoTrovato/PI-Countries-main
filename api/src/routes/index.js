const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require('./countries.js');
const ActivityRoutes = require('./activity.js');
//Acá tengo las constantes de rutas creadas que requieren 
//los archivos de ruta que cree antes
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/paises', CountriesRoutes); // http://localhost:3001/paises
router.use('/actividades', ActivityRoutes); // http://localhost:3001/actividades

module.exports = router;
 