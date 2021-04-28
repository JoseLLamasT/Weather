import "./NewCity.css";
import { useState } from "react";

function NewCity({ changeCity }) {
	let [city, setCity] = useState("location");

	const handleEvent = (e) => {
		setCity(([e.target.name] = e.target.value));
	};
	return (
		<div>
			<label>
				<input value={city} name='city' type='text' onChange={handleEvent} />
			</label>
			<button onClick={() => changeCity(city)}>Search</button>
		</div>
	);
}

export default NewCity;
