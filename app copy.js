const req01 = require('./request_request');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad',
        demand: true
    }
}).argv;

console.log(argv);
console.log(argv.direccion);


let x1 = req01.ubicacion('Abella', function(err, json) {
    if (err) {
        console.log(err);
    } else {
        // console.log(json);
        return json;
    }
});
console.log(x1);
for (let key in json) {
    console.log('[2]' + json[key].name);
}