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
        filterr:{
            language:'all',
            country:'all',
            rating:'all',
            year:'all'
        },
        theme:'light'
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
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

    updatefilterr = (newFilter, type) => {
        const { filterr } = this.state;
        filterr[type] = newFilter;
        this.setState({filterr:filterr});
    }

    updatecurrentListStart = (e) => {
        let newStartIndex = parseInt($(e.target)[0].id);
        this.setState({ currentListStart: newStartIndex})
    }

    displayCurrentList = (movies) => {
        const {currentListStart}  = this.state;
        return movies.slice(currentListStart, currentListStart+10);
    }

    getFiltersData = (type) => {
        const {movies} = this.state;
        let list;
        if(type !== "genres"){
            list = movies.map((movie) => movie[type]);
        }else{
            list = movies.map((movie) => movie[type]);
        }
        return [...new Set(list.flat())].sort().reverse();
    }

    filterMovies = () => {
        const {movies, filterr} = this.state;
        let filterredMovies = movies;
        filterredMovies = movies.filter((movie) => {
            for (let key in filterr){
                if (filterr.hasOwnProperty(key)) {
                    if(key !== 'genres'){
                        if((filterr[key]=== 'all') || movie[key] === filterr[key]){
                            continue;
                        }else{
                            return false;
                        }
                    } else {
                        if((filterr[key]=== 'all') || movie[key].find((val) => val===filterr[key])){
                            continue;
                        }else{
                            return false;
                        }
                    }
                }
            }
            return true;
        });
        return filterredMovies;
    }

    render() {
        const {movies,filterr,currentListStart, theme} = this.state;
        var moviesSet = this.filterMovies();
        var moviesList = this.displayCurrentList(moviesSet);
        return (
            <Home
            moviesList = {moviesList}
            moviesSet = {moviesSet}
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
