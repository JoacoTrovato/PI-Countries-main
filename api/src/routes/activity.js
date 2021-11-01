const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js')

// router.post("/", async (req, res) => {
//     const activity = req.body
//     console.log(req.body)
//     // name, difficulty, duration, seasons, countries:[names]
//     try {
//         //Se crea la actividad sin los paises        
//         let [act, created] = await Activity.findOrCreate({
//             where: {
//                 name: activity.name,
//                 difficulty: activity.difficulty,
//                 duration: activity.duration,
//                 season: activity.season,
//             }
//         });
//         //Nos muestra si se creo o no
//         console.log(created)
//         //Seteo la relacion actividad-paises
//         await act.setCountries(activity.countries)
//         return res.json(act)
//     } catch (error) {
//         console.log(error)
//     }
// });

// router.get("/", async (req, res) => {
//     try {
//         let activities = await Activity.findAll();
//         return res.json(activities);
//     } catch (err) {
//         return res.status(404).send("The activities was not found");
//     }
// });

router.get('/', (req, res, next) => {
    return Activity.findAll()
    .then((activities) => {
        res.send(activities)
    })
    .catch((error) => {
        next(error)
    }) 
})

router.get("/:id/details", (req, res) => {
    const {id} = req.params
    return Country.findAll({
        include: Activity,
        attributes: ["flag", "name", "capital", "id", "subregion", "area", "population"],
        where: { //Where busca en la base de datos
            id: id
        }
    })
    .then(countries => {
        res.send(countries)
    })
})

  router.post("/", async (req, res, next) => {
    try {
        let { name, difficulty, duration, season, idCountry } = req.body;
        let newActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season,
        });
        //console.log(newActivity)
        if(idCountry){
            await newActivity.addCountry(idCountry)
        }
        // // Esto me agrega a la tabla intermedia
        // idCountry.forEach(async (pais) => {
        //     let country = await Country.findOne({
        //         where: { id: pais },
        //     });
        //await newActivity.addCountry(idCountry);
        return res.send(newActivity);
    }
    catch (error) {
        next(error)
        return res.status(400).send("The activity was not created");
    }
});



//   router.post("/", async (req, res, next) => {
//     const { name, difficulty, duration, season, idCountry } = req.body
//     console.log(req.body)
//     // name, difficulty, duration, seasons, countries:[names]
//     try {
//         //Se crea la actividad sin los paises        
//         let newActivity = await Activity.findOrCreate({
//             where: {
//                 name,
//                 difficulty,
//                 duration,
//                 season,
//             }
//         });
//         const country = await Country.findAll({
//             where:{
//                 id: idCountry
//             }
//         })
//         await newActivity.addCountry(country)
//         res.json(newActivity)
        
//     } catch (error) {
//         next(error)
//         console.log("error de cracion de actividad")

        
//     }
// });











module.exports = router;

