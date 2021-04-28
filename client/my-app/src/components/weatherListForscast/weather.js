import "./weather.css";
import WeatherByTime from "../weatherByTime/weatherByTime";
function weatherForecast({ weather }) {
	return (
		<div className='container-Weather-list'>
			{weather.map((el) => (
				<WeatherByTime data={el} key={el.dt} />
			))}
		</div>
	);
}
export default weatherForecast;
