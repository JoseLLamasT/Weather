import "./weatherbyTime.css";

function WeatherByTime({ data }) {
	let weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	let time = data.dt_txt.slice(10, 16);
	let forecastDay = data.dt_txt.slice(5, 10);

	return (
		<div className='container-weater'>
			<h5> date: {forecastDay}</h5>
			<h5>time: {time}</h5>
			<h3>{data.weather[0].description}</h3>
			<p>clouds: {data.clouds.all} %</p>
			<p>wind speed: {data.wind.speed}</p>
			<p>Temp: {data.main.temp} K</p>
			<p>Temp felling: {data.main.feels_like} K</p>
			<img src={weatherIcon}></img>
		</div>
	);
}
export default WeatherByTime;
