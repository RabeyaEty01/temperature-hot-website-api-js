const API_KEY = `43ebf354ad5c0a00d91e878e384b9766`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const countryName = document.getElementById('country').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryName}&appid=${API_KEY}&units=metric`;

    //clear input field
    document.getElementById('city-name').value = '';
    
    //data fetching
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('country', temperature.sys.country);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    console.log(temperature);

}