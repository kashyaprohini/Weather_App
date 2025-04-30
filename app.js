const api_key="c2bf678ed0ae61749bf392eced1176b8";
const api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");


async function checkWeather(country) {
    const response = await fetch(api +country +`&appid=${api_key}`);
    if(response.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".Weather").style.display="none";
    }
    else{
      let data = await response.json();
      console.log(data);
       const city=document.querySelector(".city");
       city.innerHTML=data.name;
       const temp=document.querySelector(".temp");
       temp.innerHTML=Math.round(data.main.temp)+"°c";
       const humidity=document.querySelector(".humidity") ;
       humidity.innerHTML=data.main.humidity+"%";
       const wind =document.querySelector(".wind") ;
       wind.innerHTML=data.wind.speed + "Km/h";
       if(data.weather[0].main=="Clouds"){
          weatherIcon.src="cloudy.png";
       }
       if(data.weather[0].main=="Clear"){
          weatherIcon.src="clear.png";
       }
       if(data.weather[0].main=="Rain"){
          weatherIcon.src="rain.png";
       }
       if(data.weather[0].main=="Drizzle"){
          weatherIcon.src="drizzler.png";
       }
       if(data.weather[0].main=="Mist"){
          weatherIcon.src="Mist.png";
       }
       document.querySelector(".Weather").style.display="block";
       document.querySelector(".error").style.display="none";
    }
    
}
searchbtn.addEventListener("click" , ()=>{
    let country = search.value;
    checkWeather(country);
    search.value="";
});
