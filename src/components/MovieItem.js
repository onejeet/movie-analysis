import React,{ Component } from 'react';
//import { Link } from 'react-router-dom';

class MovieItem extends Component {

    render(){
        const {movie} = this.props;

        return (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.actors.join(', ')}</td>
                    <td>{movie.genres.join(', ')}</td>
                    <td>{movie.language}</td>
                    <td>{movie.country}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.budget ? "$"+parseInt(movie.budget).toLocaleString() : " "}</td>
                    <td>{movie.year}</td>
                    <td><a href={movie.imdb_link} target="_blank" rel="noopener noreferrer"> IMDB Page <i className="fa fa-link" aria-hidden="true"></i> </a></td>
                </tr>
        );

    }
}

export default MovieItem;
