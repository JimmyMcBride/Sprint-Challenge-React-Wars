import React from 'react';
import StarWars from './StarWars'
import './StarWars.css'

const StarCards = props => {
    console.log(props)
    return (
        <div className="card-container">
            {props.starwarsChars.map(char => {
                const { created, name, height, birth_year, gender } = char
                return (
                    <div key={created} className="star-card">
                        <StarWars
                            name={name}
                            height={height}
                            birth_year={birth_year}
                            gender={gender}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default StarCards;