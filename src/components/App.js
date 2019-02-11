import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import  Home from './Home';
//import { Route, Switch, Redirect } from 'react-router-dom';
import $ from 'jquery';



class App extends Component {
    state = {
        movies:[],
        currentListStart:0,
        filterr:'all',
        filterrColumn: '',
        theme:'light'
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        $('.pagination li').removeClass('active');
        let id = this.state.currentListStart !== 0 ? ((this.state.currentListStart/10)+1) : this.state.currentListStart+1;
        $('.pagination li.class-'+(id)).addClass('active');
    }

    loadData = () => {
        const {movies} = this.state;
        let movie;
        const url = `http://starlord.hackerearth.com/movies`;

        //fetch data from API
        fetch('/api/data.json')
        .then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                    data.forEach((item) => {
                        movie = { title: item.movie_title, director: item.director_name, actors:[item.actor_1_name, item.actor_2_name], genres: item.genres.split('|'),language:item.language, country:item.country, rating:item.content_rating, budget:item.budget, year: item.title_year, keywords: item.plot_keywords.split('|'), imdb_link:item.movie_imdb_link}

                        movies.push(movie);
                    });
                } else {
                    console.log('Sorry, Unable to retrieve data from API');
                }
            this.setState({movies});
            }).catch((error) => {
                console.log('Call is Not Successful '+error);
            })
         }).catch((error) => {
            console.log('API Not Responding'+error)
        });

    }

    updatefilterr = (filterr, column) => {
        this.setState({filterr: filterr, filterrColumn:column})
    }

    updatecurrentListStart = (e) => {
        let newStartIndex = ($(e.target)[0].id * 10) - 10;
        this.setState({ currentListStart: newStartIndex})
    }

    displayCurrentList = (moviesList) => {
        const {currentListStart}  = this.state;
        return moviesList.slice(currentListStart, currentListStart+11);
    }

    getFiltersData = (type) => {
        const {movies} = this.state;
        let list;
        if(type !== "genres"){
            list = movies.map((movie) => movie[type]);
        }else{
            list = movies.map((movie) => movie[type].map(genre => genre));
        }
        return [...new Set(list)].sort().reverse();
    }

    filterMovies = (filterr, column) => {
        const {movies} = this.state;
        let filterredMovies = movies;
        if(column !== 'genres' && column !== '' && filterr !== 'all'){
            filterredMovies = movies.filter((movie) => movie[column] === filterr);
        }else if(column !== '' && filterr !== 'all'){
            filterredMovies = movies.filter((movie) => movie['column'].find(el => el===filterr));
        }
        return filterredMovies;
    }

    render() {
        const {movies, filterr, filterrColumn ,currentListStart, theme} = this.state;
        var moviesFinal = this.filterMovies(filterr, filterrColumn);
        var moviesList = this.displayCurrentList(moviesFinal);
        return (
            <Home
            moviesList = {moviesList}
            movies = {moviesFinal}
            filterr = {filterr}
            updatefilterr = {this.updatefilterr}
            currentListStart = {currentListStart}
            theme = {theme}
            filterrMovies = {this.filterrMovies}
            updatecurrentListStart = {this.updatecurrentListStart}
            getFiltersData = {this.getFiltersData}
            />
        );
        }
    }

export default App;
