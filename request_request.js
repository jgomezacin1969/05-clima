var request = require("request");


var json;

function ubicacion(lugar, callback) {
    var options = {
        method: 'GET',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        qs: { location: 'Abella' },
        proxy: 'http://10.49.1.1:8080',
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '04f7376947msh12c4064aaacf936p193467jsn991be0e829d2'
        }
    };


    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        json = JSON.parse(body);
        callback(null, json);
    });
}



module.exports = { ubicacion };