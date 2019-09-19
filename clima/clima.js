const axios = require('axios');
const utils = require('../utils/utils.js');

let httpsProxyAgent = require('https-proxy-agent');

const getClima = async(lat1, lon1) => {

    var agent = new httpsProxyAgent('http://10.49.1.1:8080');
    var proxy = utils.inTSE();

    if (!proxy) {
        agent = null;
    }


    var config = {
        baseURL2: 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=10&lon=10',
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?units=metric',
        headers: { 'appid': 'baf0532fad2b5b06d5844d18327c3ddb' },
        params: {
            lat: lat1,
            lon: lon1,
            appid: 'baf0532fad2b5b06d5844d18327c3ddb'
        },
        httpsAgent: agent
    };

    var ret = await axios.request(config);
    var data = ret.data;
    console.log(data);

    return data;
};

module.exports = { getClima };