const request = require('request')
const myURL = require('url')


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0a6324252a3b2d5d0681f5c3c760846c&query=' + lat + ',' + long
    request({url, json: true}, (error, {body}) => {
        // const {body} = response

        if(error){
            callback('Unable to connect to the weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search')
        } else{
            const icon = myURL.parse(body.current.weather_icons[0])
            callback(undefined, body.current.weather_descriptions[0] + ' ' + icon + '\n. It is currently ' + body.current.temperature + ' degrees out. But it feels like ' + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast