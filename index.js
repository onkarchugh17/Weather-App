let fetchWeather = (city) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf5417d20fmsh21ca8a63ff080a7p13dd76jsn8905e14ad2d7',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	}
};

fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today`, options)
	.then(response => response.json())
	.then(data => console.log(displayWeather(data)))
	.catch(err => console.error(err));


let displayWeather = (data) => {
	let {tempmax , tempmin , description , humidity , temp , conditions} = data.days[0];
	let{name} = data.address;
	let tempMax =  5/9*(tempmax - 32)
    let n = tempMax.toFixed(2)
	let tempMin = 5/9*(tempmin - 32)
	let nn = tempMin.toFixed(2)
	let ctemp = 5/9*(temp-32)
    let nnn= ctemp.toFixed(2)
	console.log(n , nn , description , humidity , name , nnn , conditions)
	document.getElementById("delhi").innerText = `${searchh.value}'s Weather today:`
	document.getElementById("desp").innerText = description;
	document.getElementById("wind").innerText = `Max temp / Min temp : ${n}°C / ${nn}°C`
	document.getElementById("temp").innerText = `Temp : ${nnn}°C `
	document.getElementById("humidity").innerText = `Humidity : ${humidity}%`
	let urll = 'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	let body = document.getElementById("body")


  if(conditions == "Partially cloudy"){body.style.backgroundImage = "url('https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}


  




}	


}

let searchh = document.getElementById("search")
let btn = document.getElementById("btn")
btn.onclick = () =>{
	fetchWeather(searchh.value)
}
