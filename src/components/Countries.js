import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className="countries">
            <ul className="radio-container">
                <input
                    type="range"
                    min={1}
                    max={250}
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                <p>{rangeValue} pays</p>
                {radios.map((continent, index) => {
                    return (
                        <li key={index}>
                            <input
                                type="radio"
                                id={continent}
                                name="continentRadio"
                                onChange={(e) => setSelectedRadio(e.target.id)}
                            />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    );
                })}
                <li>
                    <input
                        type="radio"
                        id="all"
                        name="continentRadio"
                        defaultChecked={true}
                        onChange={(e) => setSelectedRadio("")}
                    />
                    <label htmlFor="all">All</label>
                </li>
            </ul>
            <ul>
                {data
                    .filter((country) => country.region.includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Card key={index} country={country} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;
