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
const { conn } = require('./src/db.js');
const { createStandarActivities } = require("./src/controllers/CreateActivity")
const { countriesFromApi } = require("./src/controllers/CreateCountry")
const DB_PORT = process.env.DB_PORT || 3001


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(DB_PORT, async() => {
    // llamar la carga de datos
    try {
      await countriesFromApi();
    } catch (error) {
      
    }
    try {
      await createStandarActivities()
    } catch (error) {
      
    }
    console.log(`%s listening at ${DB_PORT}`); // eslint-disable-line no-console
  });
});
