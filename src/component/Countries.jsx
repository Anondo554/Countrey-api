import axios from "axios";
import { useEffect, useState } from "react";

const Countries = () => {
	const [allCauntry, setAllCauntry] = useState([]);

	useEffect(() => {
		async function alldatas() {
			const data = await axios.get("https://restcountries.com/v3.1/all");
			setAllCauntry(data.data);
		}
		alldatas();
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">
				Countries: {allCauntry.length}
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
				{allCauntry.map((country) => (
					<div
						className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center"
						key={country.cca3}>
						<img
							src={country.flags?.png}
							alt={`${country.name.common} flag`}
							className="w-24 h-auto mb-2"
						/>

						<p className="text-lg font-medium text-center">
							{country.name.common}
						</p>
						<p className="text-lg font-medium text-center">{country.capital}</p>
						<p className="text-lg font-medium text-center">
							{country.name.official}
						</p>
						<p className="text-lg font-medium text-center">{country.ncca3}</p>
						<p className="text-lg font-medium text-center">
							{country.maps.googleMaps}
						</p>
						<p className="text-lg font-medium text-center">
							Day:{country.startOfWeek}
						</p>
						<p className="text-lg font-medium text-center">
							Population : {country.population}
						</p>
						<p className="text-lg font-medium text-center">
							Area: {country.area}
						</p>
						<p className="text-lg font-medium text-center">
							Currency Symbol:{" "}
							{Object.entries(country.currencies || {})[0]?.[1]?.symbol ||
								"N/A"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Countries;
