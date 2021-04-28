import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

function getTemp(weather) {
	let temperature = [];
	let time = [];
	console.log(weather);
	for (let i = 0; i < 10; i++) {
		temperature.push(weather[i].main.temp - 273.15);
		time.push(weather[i].dt_txt.slice(11, 16));
	}
	return [temperature, time];
}

function LineChart({ weather }) {
	let newData = [12, 19, 3, 5, 2, 3];
	let labels = ["1", "2", "3", "4", "5", "6"];
	if (weather[0]) {
		let timeTemp = getTemp(weather);
		newData = timeTemp[0];
		labels = timeTemp[1];
	}

	const data = {
		labels: labels,
		datasets: [
			{
				label: "temperature (°C)",
				data: newData,
				fill: true,
				backgroundColor: "rgba(255,72,75, 0.4)",
				borderColor: "rgba(255,72,75, 0.5)",
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
	return (
		<div className='container-chart'>
			<Line data={data} options={options} />
		</div>
	);
}

export default LineChart;
