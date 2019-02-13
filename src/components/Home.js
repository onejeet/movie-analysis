import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Pagination from './Pagination';
import  MovieItem from './MovieItem';
import '../sass/style.scss';
import $ from 'jquery';

class Home extends Component {

    render() {
        const {filterr, moviesList, moviesSet, currentListStart, updatecurrentListStart, updatefilterr, theme, getFiltersData, updateTheme} = this.props;
        let years = getFiltersData('year').reverse();
        let countries = getFiltersData('country');
        let ratings = getFiltersData('rating');
        let languages = getFiltersData('language');
        let genres = getFiltersData('genres');
        let actors = getFiltersData('actors');
        let directors = getFiltersData('director');
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
                            <th>Director
                                <select
                                value={filterr.director}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {directors.map((d) =>
                                    <option key={d} value={d}> {d} </option>
                                )}
                                </select>
                            </th>
                            <th>Actors
                                <select
                                value={filterr.actors}
                                onChange={(event) => updatefilterr(event.target.value, $(event.target).parent().text().split(' ')[0].toLowerCase())}
                                >
                                <option value="all"> all </option>
                                {actors.map((actor) =>
                                    <option key={actor} value={actor}> {actor} </option>
                                )}
                                </select>
                            </th>
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
                                <option value={budgetMax}>$0 - {'$'+budgetMax.toLocaleString()} </option>
                                <option value={budgetTwoThird}>$0 - {'$'+budgetTwoThird.toLocaleString()} </option>
                                <option value={budgetOneThird}>$0 - {'$'+budgetOneThird.toLocaleString()} </option>
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
                        </tr>
                        </thead>
                        <tbody>
                        {moviesList.length>0 ? moviesList.map((movie, i) =>
                                <MovieItem
                                key = {i}
                                movie = {movie}
                                updatefilterr = {updatefilterr}
                                />
                        ): null}
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
            <Footer/>
        </div>
        );
    }
}

export default Home;
