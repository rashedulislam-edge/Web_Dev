import React, { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry }) => {
  // Ensure 'country' is defined before destructuring
  if (!country) {
    // console.error("Country prop is undefined");
    return <div>No country data provided</div>;
  }

  const { name, flags, population, area, cca3 } = country;
  const [Visited, setVisited] = useState(false);

  const handleVisited = (country) => {
    setVisited(!Visited);
    // console.log("visited");
    // console.log(country);
  };
  // console.log(handleVisitedCountry);

  return (
    <div className={`border ${Visited ? "visited-border" : "not-visited"}`}>
      <h3>
        <i className="color-green ">{name?.common || "Unknown"}</i>{" "}
      </h3>
      <h3>
        {" "}
        {flags?.png ? (
          <img
            className="flag-size"
            src={flags.png}
            alt={`${name?.common} flag`}
          />
        ) : (
          "No flag available"
        )}{" "}
      </h3>
      <p>Population: {population || "Unknown"}</p>
      <p>Area: {area || "Unknown"}</p>
      <p>
        Country Code: <i className="color-purple">{cca3 || "Unknown"}</i>{" "}
      </p>
      <button
        className={`${Visited ? "visited-btn" : "non-visited-btn"}`}
        onClick={handleVisited}
      >
        {Visited ? "Bookmarked" : "Bookmark"}
      </button>{" "}
      <br />
      <button onClick={() => handleVisitedCountry(country)}>Add to wishlist</button>
      {/* {Visited ? "=> I have Visited this country" : "=>I want to Visit"} */}
      {/* <button onClick={handleVisited}>Visited</button>
      {Visited ? "=> I have Visited this country" : "=>I want to Visit"} */}
    </div>
  );
};

export default Country;
