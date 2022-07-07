"use strict";

searchButton.addEventListener("click", searchWeather)

function searchWeather(){
    var cityName = searchCity.value;
    if(cityName.length == 0){
        return alert("Please enter a city name")
    }
    var request = new XMLHttpRequest();
    var key = "d80ac6470d97fb74f9f3c35df1fbcb85";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${key}`
    var method = "GET"

    request.open(method, url)
    request.send()
    request.onload = function(){
        var data = JSON.parse(request.responseText)
        var weatherData = new Weather()
        console.log(data)
    }
}


