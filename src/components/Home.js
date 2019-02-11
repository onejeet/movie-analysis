import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Pagination from './Pagination';
import  MovieItem from './MovieItem';
import '../sass/style.scss';
import $ from 'jquery';

class Home extends Component {

    render() {
        const {filterr,movies,  moviesList, currentListStart, updatecurrentListStart, filterMovies, updatefilterr, theme, getFiltersData} = this.props;
        let years = getFiltersData('year');
        let countries = getFiltersData('country');
        let ratings = getFiltersData('rating');
        let languages = getFiltersData('language');

        return (
        <div className="main">
            <Header/>
            <div className="grid" role="grid">
                    <table className="movie-list container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Actors</th>
                            <th>Genres</th>
                            <th>Language
                                <select
                                value={filterr}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {languages.map((year) =>
                                    <option key={year} value={year}> {year} </option>
                                )}
                                </select>
                            </th>
                            <th>Country
                                <select
                                value={filterr}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {countries.map((country) =>
                                    <option key={country} value={country}> {country} </option>
                                )}
                                </select>
                            </th>
                            <th>Rating
                                <select
                                value={filterr}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {ratings.map((rating) =>
                                    <option key={rating} value={rating}> {rating} </option>
                                )}
                                </select>
                            </th>
                            <th>Budget</th>
                            <th>Year
                                <select
                                value={filterr}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {years.map((year) =>
                                    <option key={year}  value={year}> {year} </option>
                                )}
                                </select>
                            </th>
                            <th>IMDB</th>
                        </tr>
                        </thead>
                        <tbody>
                        {moviesList.map((movie, i) =>
                                <MovieItem
                                key = {i}
                                movie = {movie}
                                />
                        )}
                        </tbody>
                    </table>
            </div>
            <div className="pagination">
                <Pagination
                movies = {movies}
                currentListStart = {currentListStart}
                updatecurrentListStart = {updatecurrentListStart}
                />
            </div>
        </div>
        );
    }
}

export default Home;
