const axios = require('axios');
const utils = require('../utils/utils.js');

let httpsProxyAgent = require('https-proxy-agent');

const getLugarLL = async(ubicacion) => {

    var agent = new httpsProxyAgent('http://10.49.1.1:8080');
    var proxy = utils.inTSE();

    if (!proxy) {
        agent = null;
    }

    var config = {
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: { 'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK' },
        params: { location: ubicacion },
        httpsAgent: agent
    };

    var ret = await axios.request(config);
    var data = ret.data.Results[0];

    return data;
};

module.exports = { getLugarLL };