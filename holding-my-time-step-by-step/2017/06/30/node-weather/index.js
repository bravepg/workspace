const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'c28abd5e5f0350c34153aac0857bf6e4';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body) {
    if (err) {
        console.log('error: ', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
        console.log(message);
    }
});