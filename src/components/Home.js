import React,{ Component } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import  MovieItem from './MovieItem';
import '../sass/style.scss';
import $ from 'jquery';

class Home extends Component {

    render() {
        const {filterr, moviesList, moviesSet, currentListStart, updatecurrentListStart, updatefilterr, theme, getFiltersData, updateTheme} = this.props;
        let years = getFiltersData('year').reverse();
        console.log(years);
        let countries = getFiltersData('country');
        let ratings = getFiltersData('rating');
        let languages = getFiltersData('language');
        let genres = getFiltersData('genres');
        let budget = getFiltersData('budget');
        let budgetMax = parseInt(budget[1]);
        let budgetTwoThird = parseInt(budget[1]*0.6666);
        let budgetOneThird = parseInt(budget[1]*0.3333);

        return (
        <div className="main">
            <Header
            theme = {theme}
            updateTheme = {updateTheme}
            />
            <div className="grid" role="grid">
                    <table className="movie-list container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Actors</th>
                            <th>Genres
                                <select
                                value={filterr.genres}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {genres.map((genre) =>
                                    <option key={genre} value={genre}> {genre} </option>
                                )}
                                </select>
                            </th>
                            <th>Language
                                <select
                                value={filterr.language}
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
                                value={filterr.country}
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
                                value={filterr.rating}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {ratings.map((rating) =>
                                    <option key={rating} value={rating}> {rating} </option>
                                )}
                                </select>
                            </th>
                            <th>Budget
                                <select
                                value={filterr.budget}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                <option value={budgetMax}> 0 to {'$'+budgetMax.toLocaleString()} </option>
                                <option value={budgetTwoThird}>0 to {'$'+budgetTwoThird.toLocaleString()} </option>
                                <option value={budgetOneThird}> 0 to {'$'+budgetOneThird.toLocaleString()} </option>
                                </select>
                            </th>
                            <th>Year
                                <select
                                value={filterr.year}
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
                moviesSet = {moviesSet}
                currentListStart = {currentListStart}
                updatecurrentListStart = {updatecurrentListStart}
                />
            </div>
        </div>
        );
    }
}

export default Home;
