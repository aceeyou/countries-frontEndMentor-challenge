import { Link } from "react-router-dom";

export default function Country({ country }) {
  return (
    <div className="country">
      <img
        loading="lazy"
        src={country.flags.svg}
        alt={country.name + " flag"}
        width={"100%"}
      />
      <div className="country-description-container">
        <h2>{country.name}</h2>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}
