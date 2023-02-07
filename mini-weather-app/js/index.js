let $ = document
const searchBtn = $.querySelector('#btn')
const inputhElem = $.querySelector('#search-input')
const cityElem = $.querySelector('.city')
const weatherElem = $.querySelector('.weather')
const humidityElem = $.querySelector('.humidity')
const windElem = $.querySelector('.wind')

let citys = [
    {id : 1 , name: "shiraz" , weather : 12, humidity : 16  , speed : 19},
    {id : 2 , name: "tabriz" , weather : 23, humidity : 13  , speed : 12},
    {id : 3 , name: "shahrekord" , weather : 2 , humidity : 5  , speed : 20},
    {id : 4 , name: "ahvaz" , weather : 20, humidity : 8  , speed : 7},
    {id : 5 , name: "yazd" , weather : 14, humidity : 13  , speed : 9},
    {id : 6 , name: "esfahan" , weather : 17, humidity : 9  , speed : 10},
    {id : 7 , name: "semnan" , weather : 18, humidity : 12  , speed : 11},
    {id : 8 , name: "mashhad" , weather : 14, humidity : 6  , speed : 3},
    {id : 9 , name: "tehran" , weather :2, humidity : 2  , speed : 16},
];


function searchWeather () {
    let inputValue = inputhElem.value 
    if (inputValue) {
    
        citys.forEach(function(city){
            if (city.name === inputValue) {
                cityElem.innerHTML = inputValue
                weatherElem.innerHTML =    city.weather + "   °C"
                humidityElem.innerHTML = ' Humidity  : '  +  city.humidity + " %"
                windElem.innerHTML = ' Wind speed  : ' + city.speed + "   km/h"
            }
        })
            inputhElem.value = ''

        }else {
            alert('We can`t find the city')
        }
    }

searchBtn.addEventListener('click' , searchWeather )
inputhElem.addEventListener('keydown' , function (event) {
    if (event.keyCode === 13) {
        searchWeather()
    }
})
