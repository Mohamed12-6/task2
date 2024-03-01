// const request=require("request");

const request = require("request")

// const url="https://api.weatherapi.com/v1/current.json?key=ecfdee71ab6f4334a35182039242802%20&q=egypt"

// request({url ,json:true},(error,response)=>{
// console.log(response.body)
// console.log(response.body.location.name)//ERROR

// const data1=JSON.parse(response.body);
// console.log(data1)

// console.log(data1.location.name)

// console.log(data1.current.condition.text)


/////////////////////////////////////////////////////////////////////////////////////

// console.log(response.body.location.name)

// console.log(response.body.current.condition.text)


//     if(error){
//         console.log("Error has ocuured")
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message)
//     }
//     else{
//         console.log(response.body.location.name ,response.body.current.condition.text)

//     }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////
// const mapbox = (address, callback) => {
//     const mapboxurl = url("https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw")

//     request({ url: mapboxurl, json: true }, (error, respose) => {
//         if (error) {
//             callback(" unable to connect geocode service error ", undefined)
//         }
//         else if (response.body.error) {
//             callback(response.body.error.message, undefined)
//         }
//         else if (response.body.features.length == 0) {
//             callback("Unable to find location", undefined)
//         }
//         else {
//             callback(undefined,{
//                 longtitude : response.body.features[0].center[0],
//                 latitude : response.body.features[0].center[1]
//             })
//         }
//     })
// }
///////////////////////////////////////////////////////////////////////////

// const forecast = (longtitude,latitude,callback) => {
//     const Url = url("https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude)
    
//     request({ url: Url, json: true }, (error, response) => {
//         if (error) {
//             callback(" unable to connect geocode service error ", undefined)
//         }
//         else if (response.body.error) {
//             callback(response.body.error.message, undefined)
//         }
//         else {
//             callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
//             + "and temp is : "  + response.body.current.temp_c )
//         }
//     })
// }

//////////////////////////////////////////////////////////////////////////////////////////////
const geocode = require("./data/geocode")
const forecast = require("./data/forecast")
const country=process.argv[2];

geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)


    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
    } )
})