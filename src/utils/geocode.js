const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibml0eWEtdGF0aXBhcnRoaSIsImEiOiJja2I1eHlpemswMnNsMnFvYnprbnJ6NmxzIn0.2zBjYMEpXqU9U7430Glw6A'

    request({ url, json: true}, (error, {body}) => {
        // const {body} = response

        if(error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find the location. Try another search.', undefined)
        } else{
            callback(undefined, data = {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                place: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode