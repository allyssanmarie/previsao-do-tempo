


const key = "4e186048235b47bd0ee97dce82bdc1ee"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".weather").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".forecast-text").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: "+dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(cidade) {


    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
   
    colocarDadosNaTela(dados)
}

function clickButton() {
    const cidade = document.querySelector(".input-city").value

    searchCity(cidade)
} 

