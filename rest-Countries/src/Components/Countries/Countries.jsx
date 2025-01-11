import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log(country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  return (
    <>
      <h1>Total Countries: {countries.length}</h1>
      <div>
        <h3>Added to Wishlist: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) =>(
            <li>{country?.name?.common || "Unknown"}</li>
          ))}
        </ul>
      </div>
      <div className="card-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
