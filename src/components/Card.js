import React from 'react';

const Card = ( {movie}) => {

    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-")
        return [dd, mm, yy].join("/");
    }

    return (
        <div className='card'>
            <img src= {movie.poster_path ?
            "Https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg"} alt={`affiche ${movie.title}`}/>

            <h2>{movie.title}</h2>

            {movie.release_date ? 
                <h5>Sortie le : { dateFormater(movie.release_date) }</h5> : null
            }
            <h4>{movie.vote_average}/10 <span>⭐</span> </h4>
        </div>
    );
};

export default Card;