const searchBox= document.querySelector('.search');
const searchBtn= document.querySelector('.search-btn');
const weatherIcon= document.querySelector('.weather-icon');
const apiurl= 'https://api.openweathermap.org/data/2.5/weather?units=metric&';
const apikey='b8cd873ffb6e1a519aab7104786dee94';

async function showWeather(city){
    const response= await fetch(apiurl+`q=${city}&appid=${apikey}`);
    if(response.status===404){
        searchBox.value='';
        searchBox.placeholder='invalid city name';
        document.querySelector('.weather').style.display='none'
    }
    else{
        const data= await response.json();
        console.log(data);
        document.querySelector('.tempreture').innerHTML=Math.round(data.main.temp) +'°c';
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h'
        if(data.weather[0].main==='Clear'){
            weatherIcon.src='images/clear.png'
        }
        else if(data.weather[0].main==='Clouds'){
            weatherIcon.src='images/drizzle.png'
        }
        else if(data.weather[0].main==='Rain'){
            weatherIcon.src='images/rain.png'
        }
        else if(data.weather[0].main==='Drizzle'){
            weatherIcon.src='images/drizzle.png'
        }
        else if(data.weather[0].main==='Mist'){
            weatherIcon.src='images/mist.png'
        }
        else if(data.weather[0].main==='Snow'){
            weatherIcon.src='images/snow.png'
        }

        document.querySelector('.weather').style.display='block'
    }
}

searchBtn.addEventListener('click',()=>{
    showWeather(searchBox.value)
})