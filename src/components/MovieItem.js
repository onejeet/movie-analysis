import React,{ Component } from 'react';
//import { Link } from 'react-router-dom';

class MovieItem extends Component {
    numberFormatter = (num) => {
        let formattedNum;
        switch (true) {
            case (num > 999999999):
                formattedNum = (num/1000000000).toFixed(1) + 'b';
                break;
            case (num > 999999):
                formattedNum = (num/1000000).toFixed(1) + 'm';
                break;
            case (num > 9999):
                formattedNum = (num/1000).toFixed(1) + 'k';
                break;
            default:
                formattedNum = num.toLocaleString();
        }
        return formattedNum;
    }

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
                    <td>{movie.budget ? "$"+this.numberFormatter(parseInt(movie.budget)).toLocaleString() : " "}</td>
                    <td>{movie.year}</td>
                    <td><a href={movie.imdb_link} target="_blank" rel="noopener noreferrer"> IMDB Page <i className="fa fa-link" aria-hidden="true"></i> </a></td>
                </tr>
        );

    }
}

export default MovieItem;
