const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const countryRoutes = require("./country");
const activityRoutes = require("./activity");
// const usersRoute = require("./usersRoute")
// const favorites = require("./Favorites")




router.use('/api/countries' , countryRoutes)
router.use('/api/activities' , activityRoutes)
// router.use('/api/users' , usersRoute)
// router.use('/api/user/favorites' , favorites)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Únicos Endpoints/Flags que pueden utilizar
// GET https://restcountries.com/v3/all
// GET https://restcountries.com/v3/name/{name}
// GET https://restcountries.com/v3/alpha/{code}

module.exports = router;
