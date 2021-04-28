import "./Currentweather.css";
function Currentweather({ currentweather }) {
	console.log("currentweather", currentweather);
	if (currentweather) {
		let weatherIcon = `http://openweathermap.org/img/wn/${currentweather.weather[0].icon}@2x.png`;
		return (
			<div className='container-Currentweather'>
				<h2>Current weather</h2>
				<div className='info'>
					<div className='mainInfo'>
						<h3>{currentweather.weather[0].description}</h3>
						<img src={weatherIcon}></img>
					</div>

					<div className='additionalInfo'>
						<p>clouds: {currentweather.clouds.all} %</p>
						<p>wind speed: {currentweather.wind.speed} mph</p>
						<p>Temp: {currentweather.main.temp} K</p>
						<p>Temp felling: {currentweather.main.feels_like} K</p>
					</div>
				</div>
			</div>
		);
	}
	return <h1> loading</h1>;
}
export default Currentweather;
