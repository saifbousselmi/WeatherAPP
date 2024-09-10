// console.log("JS linked successfully")
async function fetchWeather() {
    const weatherLocation = document.getElementById('search-input').value;
    const apiKey = "2707f981b65e61b2dac1c0e8ebd84d98";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${weatherLocation}&appid=${apiKey}`;
    const url2 = "https://jsonplaceholder.typicode.com/users"
    try {
        // Correct the typo here
        const response = await fetch(url);
        const response2 = await fetch(url2);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const data2 = await response2.json();
        console.log(data);
        updateWeather(data);
        console.log(data2);
    } catch (error) {
        console.log(error);
        alert(error.message); // Use error.message to get the error message
    }
}



function updateWeather(data) {
    const city = data.name
    const temoerature = data.main.temp;
    const description = data.weather[0].description;
    
    const icon = data.weather[0].icon;

    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('city').innerHTML = `Weather in ${city}`;
    document.getElementById('temperature').innerHTML = `Temperature : ${temoerature}°C`;
    document.getElementById('description').innerHTML = `Description : ${description}`;
    document.getElementById('current-weather').style.display= "block";
}