import React from "react";

const Card = ({ country }) => {

    return (
        <li className="card">
            <img
                src={country.flags.svg}
                alt={"drapeau du pays : " + country.translations.fra.common}
            />
            <div className="infos">
                <h2>Pays : {country.translations.fra.common}</h2>
                <h4>Capitale : {country.capital}</h4>
                <p>Population : {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;
