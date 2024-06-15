import React from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    console.log("Fetching country details for:", name);
    fetch(`/api/v1/countries/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data received:", data);
        const foundCountry = data.find(c => c.name.toLowerCase() === name.toLowerCase());
        console.log("Found country:", foundCountry);
        setCountry(foundCountry);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [name]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} style={{ width: "100px", height: "60px" }} />
      <p>Official Name: {country.officialName}</p>
      <p>Capital: {country.capital}</p>
      {country.currency && <p>Currency: {country.currency}</p>}
    </div>
  );
}

export default CountryDetail;
