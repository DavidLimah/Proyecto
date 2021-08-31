const aside = document.querySelector('aside');
    const section = document.querySelector('section');

    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Cochabamba&appid=55dbd89989d1b616a3c0afef7d2ed2f5';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function () {
      const textoClima = request.response;
      const valoresClima = JSON.parse(textoClima);
      mostrarClima(valoresClima);
    }

    function mostrarClima(jsonObj) {
      const titulo = document.createElement('h3');
      titulo.textContent = 'Temperatura ' + jsonObj['name'];
      aside.appendChild(titulo);
      const tempActual = document.createElement('p');
      tempActual.textContent = 'Temperatura actual: ' + Math.round(jsonObj.main['temp'] - 273.15) + ' C°';
      const tempMaxima = document.createElement('p');
      tempMaxima.textContent = 'Temperatura máxima: ' + Math.round(jsonObj.main['temp_max'] - 273.15) + ' C°';
      const tempMinima = document.createElement('p');
      tempMinima.textContent = 'Temperatura mínima: ' + Math.round(jsonObj.main['temp_min'] - 273.15) + ' C°';
      const humedad = document.createElement('p');
      humedad.textContent = 'Humedad: ' + jsonObj.main['humidity'] + "%";
      aside.appendChild(tempActual);
      aside.appendChild(tempMaxima);
      aside.appendChild(tempMinima);
      aside.appendChild(humedad);
    }