 async function weatherApp() {
      const cityEnter = document.getElementById("city");
      const outputRef = document.getElementById("weaterResult");
      const city = cityEnter.value.trim();

      if (!city) {
        outputRef.innerHTML = "Please enter a city!";
        return;
      }

      try {
        const weatherRes = await fetch(
          `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
        );

        const weather = await weatherRes.json();

        const currentTemp = weather.current?.temp_c;

        if (!currentTemp) {
          outputRef.innerHTML = "City not found!";
          return;
        }

        outputRef.innerHTML = `Today temperature of <b>${city}</b> is <b>${currentTemp}°C</b>`;
      } catch (error) {
        outputRef.innerHTML = "Error fetching weather!";
      }
    }