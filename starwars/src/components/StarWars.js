import React from "react";

const StarWars = props => {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Birth year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )

};

export default StarWars;