window.onload = function () {
    fetch("https://mars-weather-rems.netlify.app/rems.json")
        .then((res) => res.json())
        .then((res) => {
            //para la radiación uv

            let position = document.getElementById("uvdata");
            let item = `
              <div class="uv_data">

              ${res.weather_report.magnitudes[0].local_uv_irradiance_index}


             </div>
            `;
            position.innerHTML += item;

            // para la estacion

            let season = document.getElementById("positiondata");
            let item2 = `
              <div class="position_data">

              ${res.weather_report.magnitudes[0].season}


             </div>
            `;
            season.innerHTML += item2;

            //para la puesta de sol

            let sunset = document.getElementById("sunset");
            let item3 = `
              <div class="sunset_data">

              ${res.weather_report.magnitudes[0].sunset}


             </div>
            `;
            sunset.innerHTML += item3;

            // para la salida del sol

            let sunrise = document.getElementById("sunrise");
            let item4 = `
              <div class="sunrise_data">

              ${res.weather_report.magnitudes[0].sunrise}


             </div>
            `;
            sunrise.innerHTML += item4;

            // para el sol

            let sol = document.getElementById("sol");
            let item5 = `
              <div class="sol">

              Sol actual: ${res.weather_report.sol}


             </div>
            `;
            sol.innerHTML += item5;
        });
};
