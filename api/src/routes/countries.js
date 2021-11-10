const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
const router = Router();

router.get('/', async (req, res, next) =>{
    let Name = req.query.name
        if (Name) {    //ACA ME TRAIGO TODOS LOS PAISES
            try{
                let paQuery = await Country.findAll({
                    include: Activity,
                    where:{
                        name:{
                            [Op.iLike]: '%' + Name + '%'}}})
                if (!paQuery.length) {
                    return res.status(404).json('No se encontro el pais que estas buscando')
                }else{
                    return res.json(paQuery)
                }
            }
            catch(errro){
                next(error);
            }
        }
    try{
        const paisesBd = await Country.findAll({
            include: {model: Activity}
        })
        return res.json(paisesBd)
    }
    catch(error){
        next(error);
    }
    })
    
    router.get('/:id', async (req, res, next)=>{   
    try{
        const {id} = req.params;
        var ap = await Country.findByPk(id,{
        include: Activity,
        })
        return res.send(ap)
        }
    catch(error){
        next(error)
    }
    })

    // {                     ASI ME TRAIGO LA INFO PARA USAR EN DETAIL
    //     "id": "ARG",
    //     "name": "Argentina",
    //     "img": "https://flagcdn.com/ar.svg",
    //     "continente": "Americas",
    //     "capital": "Buenos Aires",
    //     "subregion": "South America",
    //     "area": 2780400,
    //     "poblacion": 45376763,
    //     "Activities": []  Lo incluyo en todas pero solo da informacion si viene con actividades
    // }
    
    
module.exports = router;






















// router.get('/', getCountries);
// router.get('/:id', getCountryById);

// async function getCountriesApi (){

//     try {
        
//         let checkDb = await Country.findAll();
//         if(checkDb.length > 0) {
//             return checkDb;
//         } else {
//             const getApi = await axios.get('https://restcountries.com/v3/all');
//             const getAllApi = getApi.data.map( e => { 
                
//                 return {
                
//                     id: e.cca3 ? e.cca3 : e.cioc,
//                     name: e.name.common,
//                     flag: e.flags[0] && e.flags[1] || e.flag ,
//                     continent: e.region,
//                     capital: e.capital && e.capital[0] || "Capital Default", 
//                     subregion: e.subregion || "Region Default",
//                     area: e.area || "Area Default",
//                     population: e.population || 0
//                 }
//             })
//             const countriesDb = await Country.bulkCreate(getAllApi);
//             return countriesDb;
//         }
        
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function getCountries(req, res, next){

//     await getCountriesApi();

//     try {
        
//         let { name, order, area, population } = req.query;
        
//         if(name){
            
//             const country = await Country.findAll({

//                 attributes: [
//                     "id", 
//                     "name", 
//                     "flag",
//                     "capital", 
//                     "continent", 
//                     "area",
//                     "subregion",
//                     "population"
//                 ],
//                 include: Turism,
//                 where:{
//                     name: {
//                         [Op.iLike] : `%${name}%`
//                     }
//                 }
//             })
//             return country.length ? res.json(country) : res.status(400).send("Country not found")
//         } 
//         if(order){
            
//             const country = await Country.findAll({

//                 attributes: [
//                     "id", 
//                     "name", 
//                     "flag",
//                     "capital", 
//                     "continent", 
//                     "area",
//                     "subregion",
//                     "population"
//                 ],
//                 include: Turism,
//             })
//             if(order === "Def" || !order || order === "") return res.send(country);
            
//             if(order === "Asc" || !order || order === ""){
//                 countryOrder = country.sort((a,b) =>{
//                     if(a.name > b.name) return 1;
//                     if(b.name > a.name) return -1; 
//                     return 0; 
//                 })
//                 return res.send(countryOrder)
//             } 
//             if(order === "Desc" || !order || order === ""){
//                 countryOrder = country.sort((a,b) =>{
//                     if(a.name > b.name) return -1;
//                     if(b.name > a.name) return 1; 
//                     return 0;
//                 })
//                 return res.send(countryOrder)
//             }
//         }
//         if(area){

//             const country = await Country.findAll({

//                 attributes: [
//                     "id", 
//                     "name", 
//                     "flag",
//                     "capital", 
//                     "continent", 
//                     "area",
//                     "subregion",
//                     "population"
//                 ],
//                 include: Turism,
//             })
//             let sortArea;
//             if(area === "Def" || !area || area === "") return res.send(country)
            
//             if(area === "Asc" || !area || area ===""){
//                 sortArea = function(a,b) {
//                     if(a.area > b.area) return 1;
//                     if (a.area < b.area)return -1;
//                     return 0;    
//                 }
//             } else {
//                 sortArea = function(a,b) {
//                     if(a.area > b.area) return -1;
//                     if (a.area < b.area)return 1;
//                     return 0;    
//                 }
//             }
//             return res.send(country.sort(sortArea));
//         }
//         if(population){
            
//             const country = await Country.findAll({

//                 attributes: [
//                     "id", 
//                     "name", 
//                     "flag",
//                     "capital", 
//                     "continent", 
//                     "area",
//                     "subregion",
//                     "population"
//                 ],
//                 include: Activity,
//             })
//             let sortPopulation;
//             if(population === "Def" || !population || population === "") return res.send(country)
            
//             if(population === "Asc" || !population || population ===""){
//                 sortPopulation = function(a,b) {
//                     if(a.population > b.population) return 1;
//                     if (a.population < b.population)return -1;
//                     return 0;    
//                 }
//             } else {
//                 sortPopulation = function(a,b) {
//                     if(a.population > b.population) return -1;
//                     if (a.population < b.population)return 1;
//                     return 0;    
//                 }
//             }
//             return res.send(country.sort(sortPopulation));


//         } else {
//             const countries = await Country.findAll({
//                 attributes: [
//                     "id", 
//                     "name", 
//                     "flag",
//                     "capital", 
//                     "continent", 
//                     "area",
//                     "subregion",
//                     "population"
//                 ],
//                 //REVISAR EL INCLUDES
//                 include: Turism
//             })
//             return res.send(countries);
//         }
//     } catch (error) {
//         next(error);
//         console.log("error get countries", error)
//     }
// }

// async function getCountryById (req, res, next){
    
//     await getCountriesApi();
    
//     let { id } = req.params;
    
//     id = id.toLocaleUpperCase();
    
//     let activityForId = [];
//     let detailActivity = [];
//     let countryActivity = {};

//     try {
//         let country = await Country.findByPk(id, {include:{model: Turism}})
//         let activities = await CountryActivities.findAll({where:{countryId: id}})

//         for (let i = 0; i < activities.length; i++) {
//             activityForId.push(activities[i].dataValues.activityId)
//         }
//         for (let i = 0; i < activityForId.length; i++) {
//             const findActivity = await Activity.findByPk(activityForId[i])
//             detailActivity.push(findActivity.dataValues)            
//         }
//         countryActivity = {...country.dataValues, activities: detailActivity}
//         return res.json(countryActivity);
//     } catch (error) {
//         next(error);
//     }
// }































// //const { getAllCountries, getOneCountry } = require('../funciones/countries');


// // router.get("/countries", getAllCountries);
// // router.get("/country/:id", getOneCountry)

// const countryall = async () => {
//     let countries = await Country.findAll({
//         attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion','area' ]
//     });
//     if (!countries.length) {
//         var allCountry = await axios.get('https://restcountries.eu/rest/v2./all');
//         allCountry =  allCountry.data
//         allCountry = allCountry.map(country => {
//                 return {
//                 ID: country.alpha3Code,
//                 name: country.name,
//                 image: country.flag,
//                 continente: country.region,
//                 capital: country.capital,
//                 subregion: country.subregion,
//                 area: country.area,
//                 poblacion: country.population
//             }
//         });
//         await Country.bulkCreate(allCountry);
//     }   
//     countries = await Country.findAll({
//         attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion','area' ],
//         include: Turism
//     });
//     return countries;
// }

// const countryAllName = async (name) => {
//     name = name[0].toUpperCase() + name.slice(1)
//     var countryName = await Country.findAll({
//         attributes: [ 'ID', 'name', 'image', 'continente', 'poblacion' ],
//         // wherw para filtrar la consulta.
//         where: {
//             name: {
//                 [Op.startsWith]: name
//             }
//         }
//     });
//     console.log(countryName);
//     return countryName;
// }

// const countryDetail = async (id) => {
//     let countryId = await Country.findAll({
//         attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion', 'area', 'subregion' ],
//         where:{
//             ID:{
//                 [Op.eq]: id
//             }
//         },
//         include: Turism
//     })
    
//     //var countryId = await Country.findByPk(id);
//     return countryId
// }

// // const turismPost = async (body) => {
// //     let { name, dificultad, duracion, temporada, pais } = body;
// // // se le pone corchetes por q el   te retorna un modelo y un bool entonces aplicamos destructuring
// // 	let [newTurism] = await Turism.findOrCreate({
// // 		where: {[Op.and]: [{name: name}, {temporada: temporada}]},
// // 		defaults: {
// // 			name,
// // 			dificultad,
// // 			duracion,
// // 			temporada
// // 		}
// // 	});
// //     //pais = pais.split(',')
// //     // el promise.all es para q se resuelvan todas ya q recive un array de promesas(si uno fall fallan todos) si pasan todos te retorna u fullfile si no un rejected
// //     var aux = await Promise.all(pais.map( c => {
// // 		var country =  Country.findOne({
// // 			where: {name: c}
// // 		});
// //         //console.log(country);
// //         return country
// // 	}))
// //     // console.log(aux);
// //     var aux2 = await newActivity.addCountries(aux) 
// //     // console.log(aux2);
// //     return aux2;
// // }


// // const getActivity = async () => {
// //     let activities = await Actividad.findAll();
// //     return activities
// // }

// router.get('/', async (req,res,next) => {
//     try {
//         const { name } = req.query
//         // res.send('Soy la ruta get de countries')
//         if (name) {
//             const forName = await countryAllName(name)
//             // le pregunto si tiene length forName si tiene devuelve el pais si no el mensaje
//             res.status(200).send(forName.length ? forName : [{msj: 'No se encontro el nombre del pais'}]);
//         } else {
//             const all = await countryall()
//             res.status(200).send(all);
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// router.get('/:idPais', async (req, res, next) => {
//     try {
//         var { idPais } = req.params
//         var countieDetail = await countryDetail(idPais)
//         res.status(200).send(countieDetail)
//     } catch (error) {
//         next(error)
//     }
// })
// // router.post('/', (req, res, next) => {
// //     res.send("soy post /countries")
// // })

// // router.put('/', (req, res, next) => {
// //     res.send("soy put /countries")
// // })

// // router.delete('/', (req, res, next) => {
// //     res.send("soy delete /countries")
// // })



// // const countryall = async () => {
// //     let countries = await Country.findAll({
// //         attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion','area' ]
// //     });
// //     if (!countries.length) {
// //         var allCountry = await axios.get('https://restcountries.eu/rest/v2/all');
// //         allCountry =  allCountry.data
// //         allCountry = allCountry.map(country => {
// //                 return {
// //                 ID: country.alpha3Code,
// //                 name: country.name,
// //                 image: country.flag,
// //                 continente: country.region,
// //                 capital: country.capital,
// //                 subregion: country.subregion,
// //                 area: country.area,
// //                 poblacion: country.population
// //             }
// //         });
// //         await Country.bulkCreate(allCountry);
// //     }   
// //     countries = await Country.findAll({
// //         attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion','area' ],
// //         include: Actividad
// //     });
// //     return countries;
// // }