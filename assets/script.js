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
})
}
function getforecastdata(){
    var city = document.getElementById('city').value;
let queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
fetch(queryURL)
    .then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data)
    let day1 = data.list[0].main.temp;
    let day2 = data.list[8].main.temp;
    let day3 = data.list[16].main.temp;
    let day4 = data.list[24].main.temp;
    let day5 = data.list[32].main.temp;

    
    let datadiv=document.createElement('div')
    let intro_para=document.createElement('h1')
    let day1_para=document.createElement('h3')
    let day2_para=document.createElement('h3')
    let day3_para=document.createElement('h3')
    let day4_para=document.createElement('h3')
    let day5_para=document.createElement('h3')

    intro_para.innerHTML= city + "'s 5 day temperatures"
    day1_para.innerHTML= day1 + " degrees F"
    day2_para.innerHTML= day2 + " degrees F"
    day3_para.innerHTML= day3 + " degrees F"
    day4_para.innerHTML= day4 + " degrees F"
    day5_para.innerHTML= day5 + " degrees F"
    

    datadiv.append(intro_para)
    datadiv.append(day1_para)
    datadiv.append(day2_para)
    datadiv.append(day3_para)
    datadiv.append(day4_para)
    datadiv.append(day5_para)
   
    document.getElementById('json2').append(datadiv)
})

}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

searchBtn.addEventListener("click" , function(event){
    event.preventDefault()
    getweatherdata()
})

