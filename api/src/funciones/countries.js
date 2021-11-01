// const { Country, Turism, Op} = require("../db");
// const axios=require("axios");

// async function data(){
//     axios.get("https://restcountries.com/v3/all")
//     .then( Datos => { 
//       console.log(Datos.data.length)
//     for(var i=0;i< Datos.data.length;i++){
//       Country.create({
//         id: Datos.data[i].alpha3Code,
//         name: Datos.data[i].name,
//         image: Datos.data[i].flags.svg,
//         continent: Datos.data[i].region,
//         capital: Datos.data[i].capital,
//         subregion: Datos.data[i].subregion,
//         area: Datos.data[i].area,
//         population: Datos.data[i].population,
//       })
//     }})
// }; 

// async function getAllCountries(req, res, next) {
//     try {
//         Country.findAll()
//         .then(finalData=> res.json(finalData))
//     } catch (error) {
//         next(error);
//     }
// };

// async function getOneCountry (req, res, next) {
//     try {
//       const {id} = req.params;
//       let country= await Country.findOne({where: {id: id}, include: {model: Activity}});
//       console.log(country);
//       res.json(country);
//     } catch (error) {
//       next(error)
//     }
//   };

// module.exports = { 
//     //getCountries,
//     data,
//     getOneCountry,
//     //getCountriesOrder,
//     getAllCountries 
// };