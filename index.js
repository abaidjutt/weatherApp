async function weatherApp() {
    const cityEnter = document.getElementById("city");
    const outputRef = document.getElementById("weaterResult");
    const city = cityEnter.value;

    const weatherRes = await fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`);
    const weather = await weatherRes.json();

    const currentTemp = weather.current.temp_c;
    outputRef.innerHTML = `Today temperature of ${city} is ${currentTemp}`;

}













