import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutCountry.css";
import { Link, useLocation } from "react-router-dom";

export default function AboutCountry() {
  const { state } = useLocation();

  return (
    <main className="main__about-country">
      <div className="back-button">
        <Link to="/" className="back-button-link">
          <FontAwesomeIcon className="icon__back-btn" icon={faArrowLeftLong} />
          <p>Back</p>
        </Link>
      </div>
      <div className="about__country">
        <img
          src={state.country.flags.svg}
          alt={`${state.country.name} flag`}
          width="100%"
        />

        <div className="about__country-description">
          <h1>{state.country.name}</h1>
          <div className="about__description-row">
            <div className="left">
              <p>
                <span className="text__medium">Native Name:</span>{" "}
                {state.country.nativeName}
              </p>
              <p>
                <span className="text__medium">Population:</span>{" "}
                {state.country.population.toLocaleString()}
              </p>
              <p>
                <span className="text__medium">Region: </span>{" "}
                {state.country.region}
              </p>
              <p>
                <span className="text__medium">Sub Region: </span>{" "}
                {state.country.subregion}
              </p>
              <p>
                <span className="text__medium">Capital: </span>{" "}
                {state.country.capital}
              </p>
            </div>
            <div className="right">
              <p>
                <span className="text__medium">Top Level Domain: </span>
                {state.country.topLevelDomain.map((domain) => domain)}
              </p>
              <p>
                <span className="text__medium">Currencies: </span>
                {state.country.currencies.map((currency) => currency.code)}
              </p>
              <p>
                <span className="text__medium">Languages: </span>
                {state.country.languages.map((language, i, lang) =>
                  lang.length !== i + 1 ? language.name + ", " : language.name
                )}
              </p>
            </div>
          </div>
          {state.country.hasOwnProperty("borders") && (
            <div className="bordering-countries-container">
              <div className="bordering-country-text-container">
                <p className="text__medium border-countries-text">
                  Border Countries:{" "}
                </p>
              </div>
              <div className="countries-container-items">
                {state.country.borders?.map((borderingCountry) =>
                  state.countries.map((country) =>
                    country.alpha3Code === borderingCountry ? (
                      <BorderCountryBox country={country.name} />
                    ) : null
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function BorderCountryBox({ country }) {
  return <p className="bordering-country-item">{country}</p>;
}
