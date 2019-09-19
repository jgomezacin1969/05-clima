const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const utils = require('./utils/utils.js');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad',
        demand: false
    }
}).argv;

// console.log(argv);
// console.log(argv.direccion);

/* lugar.getLugarLL("Premia de Mar")
    .then((ret) => {
        console.log('Lugar:' + ret.name);
        let lat = ret.lat;
        let lon = ret.lon;
        console.log('lat:' + lat);
        console.log('lon:' + lon);
        clima.getClima(lat, lon)
            .then((resp) => { console.log(resp); })
            .catch((e) => { console.log('ERROR CLIMA ' + e); });
    })
    .catch((e) => { console.log('ERROR ' + e); });
 */
let ubi = "Premia de Mar";
if (argv.direccion != null) {
    console.log('Parámetro: ' + argv.direccion);
    ubi = argv.direccion;
}
const getInfo = async(ubi) => {
    try {
        let coord = await lugar.getLugarLL(ubi);
        let sitio = await clima.getClima(coord.lat, coord.lon);
        console.log('LATTTT:' + coord.lat);
        console.log('LON:' + coord.lon);
        let msg = 'La temperatura en ' + ubi + ' es de ' + sitio.main.temp;
        console.log('Lugar:' + msg);

    } catch (e) {
        console.log('ERROR:' + e);
    }
};

getInfo(ubi);