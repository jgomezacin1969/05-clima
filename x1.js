const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Madrid',
    headers: { 'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK' },
    proxy: {
        host: '10.49.1.1',
        port: 8080,
        auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
        }
    }
});

instance.get()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('22HAY ERROR' + error);
    });



.then((res) => {
        ubi = 10;
        for (let key in res.data.Results) {
            console.log(res.data.Results[key].name);
        }
    })
    .catch(err => console.log('ERROR'));