function apiRequest(city, method, option) {
	return fetch(
		`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9f1d7ea9e8bd1881816cf41b6b605b38`,
		method,
		option
	)
		.then((res) => (res = res.json()))
		.catch((error) => {
			console.log(error);
		});
}

function getWeater(city) {
	return apiRequest(city);
}

export default { getWeater };
