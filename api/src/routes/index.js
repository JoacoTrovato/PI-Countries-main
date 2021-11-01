const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.js');
const activityRouter = require('./activity.js');
//Acá tengo las constantes de rutas creadas que requieren 
//los archivos de ruta que cree antes
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter); // http://localhost:3001/countries
router.use('/activity', activityRouter); // http://localhost:3001/activity

module.exports = router;
 