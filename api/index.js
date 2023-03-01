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
const { createStandarActivities } = require("./src/controllers/createActivity")
const { countriesFromApi } = require("./src/controllers/createCountry")


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async() => {
    // llamar la carga de datos
    try {
      await countriesFromApi();
    } catch (error) {
      
    }
    try {
      await createStandarActivities()
    } catch (error) {
      
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
