window.onload = function () {
    fetch("https://mars-weather-rems.netlify.app/rems.json")
        .then((res) => res.json())
        .then((res) => {
            //para la temperatura minima

            let minTemperature = document.getElementById("min");
            let item = `
              <div class="min">

              ${res.weather_report.magnitudes[0].min_temp}ºC


             </div>
            `;
            minTemperature.innerHTML += item;

            // console.log(item);

            // para temp maxima

            let maxTemperature = document.getElementById("max");
            let item2 = `
              <div class="max">

              ${res.weather_report.magnitudes[0].max_temp}ºC


             </div>
            `;
            maxTemperature.innerHTML += item2;

            // console.log(item2);

            //para temp superficial

            let supTemperature = document.getElementById("surface");
            let item3 = `
              <div class="surface">

              ${res.weather_report.magnitudes[0].min_gts_temp}ºC


             </div>
            `;
            supTemperature.innerHTML += item3;

            // console.log(item3);

            //presion

            let presion = document.getElementById("pressure");
            let item4 = `
              <div class="pressure">

              ${res.weather_report.magnitudes[0].pressure} mbar


             </div>
            `;
            presion.innerHTML += item4;

            // console.log(item4);

            //fecha de la tierra

            let time = document.getElementById("time");
            let item5 = `
              <div class="current_time">

              ${res.weather_report.terrestrial_date} 


             </div>
            `;
            time.innerHTML += item5;

            // console.log(item5);
        });








   //EMPEZAR AQUI
   let users;
    /** Crear / conectar bbdd */
    let db = new PouchDB('cosas');

    /** Pintar la lista de usuarios */
    // renderUsers();
    
    /** Escuechar eventos de los botones */
    let btnAdd = document.querySelector("#savebtn");
    btnAdd.addEventListener("click", addUser, false);
    

    /** Función para añadir usuarios */
    function addUser(){
        
        let name = document.querySelector("#max");
        let age = document.querySelector("#min");
        let _id = document.querySelector("#time");
                    
            
            // Añadir registro a la BBDD
            let doc = {
                "_id": _id.innerText,
                "name": name.innerText,        
                "age": age.innerText        
              };            
            db.put(doc);     
            
            
        console.log(doc)
    }

    





};
