import React from "react";
import "./Content.css";
import Country from "./Country";
import { Link } from "react-router-dom";
// import AboutCountry from "./AboutCountry";

export default function Content({ data }) {
  return (
    <div className="countries-container">
      {data?.map((country, i) => (
        <Link
          key={i}
          to={`country/${country.alpha3Code}`}
          state={{ country: country, countries: data }}
        >
          <Country country={country} />
        </Link>
      ))}
    </div>
  );
}

// function Country({ country }) {
//   return (
//     <div className="country">
//       <img
//         loading="lazy"
//         src={country.flags.svg}
//         alt={country.name + " flag"}
//         width={"100%"}
//       />
//       <div className="country-description-container">
//         <h2>{country.name}</h2>
//         <p>Population: {country.population.toLocaleString()}</p>
//         <p>Region: {country.region}</p>
//         <p>Capital: {country.capital}</p>
//       </div>
//     </div>
//   );
// }
