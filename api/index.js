//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios').default;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
      console.log("%s at 3001", "Todo piola");
      const API = "https://restcountries.com/v3/all"
      const getApiInfo = async() => {
      const apiURL = await axios.get(API);
      const apiResults = apiURL.data; //Data porque viene de axios
      await apiResults.map((c) => {
         Country.findOrCreate({
          where: {
          id: c.cca3,
          name: c.name.official,
          flag: c.flags[0],
          region: c.region,
          capital: c.capital ? c.capital[0] : "capital not found",
          subregion: c.subregion ? c.subregion : "sub region not found",
          area: c.area,
          population: c.population, //ponerle actividad
          // activity: c.activity ? c.activity: "actividad no encontrada",
          }
        })
      //.then((instancia) => console.log(instancia.toJSON()))
      .catch((err) => console.log(err))
      });
    };
    getApiInfo();
});
});



// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('% listening at 3001'); // eslint-disable-line no-console
//     const countries = axios.get("https://restcountries.com/v3/all")
//   });
// }).catch(error => console.log(error));
