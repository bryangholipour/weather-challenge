var apiKey = "f44b9b431359928fe1e80531f7a8ae4d";

var searchBtn = document.getElementById('searchBtn');

console.log(document.getElementById('city'));
// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}
function getweatherdata(){
    console.log(queryURL);
    var city = document.getElementById('city').value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
fetch(queryURL)
    .then(function(response) {
    console.log(queryURL);
    return response.json();
})
.then(function(data) {
    let lat = data.coord.lat
    let lon = data.coord.lon
    let temp = data.main.temp
    let hum = data.main.humidity
    let wind = data.wind.speed
    let loc = data.name
    console.log(data);
    let datadiv=document.createElement('div')
    let temp_para=document.createElement('p')
    let wind_para=document.createElement('p')
    let hum_para=document.createElement('p')
    let loc_para=document.createElement('p')

    loc_para.innerHTML=city
    temp_para.innerHTML="temp is "+ temp +" degrees Fahrenheit"
    hum_para.innerHTML="humidity is "+hum+"%"
    wind_para.innerHTML="wind speed is "+wind+" MPH"

    datadiv.append(loc_para , temp_para , hum_para , wind_para)
    document.getElementById('json').append(datadiv)
    getforecastdata(lat , lon);

    // console.log(data.coord.lat);
    // console.log(data.coord.lon);
    // for(let i = 0; i < data.length; i++) {
    //     console.log(data[i])
        
    // }
})
}
function getforecastdata(lat , lon){
let queryURL="https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "37795c33a97e3c4d32a795d6bfcc9232";
fetch(queryURL)
    .then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data)
})

}
// console.log(queryURL);
// fetch(queryURL)
//     .then(function(response) {
//     console.log(queryURL);
//     return response.json();
// })
// .then(function(data) {
//     console.log();
//     console.log(data);
//     for(let i = 0; i < data.length; i++) {
//         console.log(data[i])
        
//     }
// })
searchBtn.addEventListener("click" , function(event){
    event.preventDefault()
    getweatherdata()
})

