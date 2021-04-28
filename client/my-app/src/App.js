import "./App.css";
import { useEffect, useState } from "react";
import API from "./services/weather-Api";
import WeatherForecast from "./components/weatherListForscast/weather";
import Currentweather from "./components/Currentweather/Currentweather";
import NewCity from "./components/NewCity/NewCity";
import LineChart from "./components/Chart/Chart";

function App() {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState("london");

	useEffect(() => {
		console.log(city);
		API.getWeater(city).then((newWeather) => {
			setWeather(newWeather.list);
		});
	}, [city]);

	function changeCity(updateCity) {
		return setCity(updateCity);
	}

	if (weather) {
		return (
			<div className='app-container'>
				<div className='header'>
					<h1>Weather Forcast {city}</h1>
					<div className='from-header'>
						<h2>City</h2>
						<NewCity changeCity={changeCity} />
					</div>
				</div>
				<div className='curretWeather-Chart-container'>
					<Currentweather currentweather={weather[0]} />
					<LineChart weather={weather} />
				</div>
				<WeatherForecast weather={weather} />
			</div>
		);
	} else {
		return (
			<div className='app-container'>
				<div className='header'>
					<h1>Weather Forcast {city}</h1>
					<div className='from-header'>
						<h2>City</h2>
						<NewCity changeCity={changeCity} />
					</div>
				</div>
				<h1> The city you selected does not exist!!!</h1>
			</div>
		);
	}
}

export default App;
