

async function loadEvents(){

let city = "Pune"

let res = await fetch(
"http://localhost:5000/api/events/"+city
)

let data = await res.json()

let list = document.getElementById("eventList")

data._embedded.events.slice(0,5).forEach(event=>{

let li = document.createElement("li")

li.innerText = event.name

list.appendChild(li)

})

}

loadEvents()




async function loadWeather(){

let city = "Pune"

let res = await fetch(
"http://localhost:5000/api/weather/"+city
)

let data = await res.json()

document.getElementById("temperature")
.innerText = data.main.temp + " °C"

}

loadWeather()
