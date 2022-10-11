var apiKey = "f44b9b431359928fe1e80531f7a8ae4d";
var searchBtn = document.getElementById('searchBtn');

console.log(document.getElementById('city'));
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
    const container = document.getElementById('accordion');
    console.log(data);
    let datadiv=document.createElement('div')
    let temp_para=document.createElement('h4')
    let wind_para=document.createElement('h4')
    let hum_para=document.createElement('h4')
    let loc_para=document.createElement('h1')

    loc_para.innerHTML=city + " " + today
    temp_para.innerHTML="temperature is "+ temp +" degrees F"
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
function getforecastdata(){
    var city = document.getElementById('city').value;
let queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
fetch(queryURL)
    .then(function(response) {
    return response.json();
}).then(function(data){
    let day1 = data.list;
    let day2 = data.list;
    console.log(data)
    let datadiv=document.createElement('div')
    let day1_para=document.createElement('h1')

    day1_para.innerHTML= day1
})

}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
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

