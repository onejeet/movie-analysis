import React, { Component } from 'react';
import '../App.css';
import  Home from './Home';
import $ from 'jquery';

class App extends Component {
    state = {
        movies:[],
        currentListStart:0,
        filterr:{
            language:'all',
            country:'all',
            rating:'all',
            year:'all',
            budget:'all',
            genres:'all',
            actors:'all',
            director:'all'
        },
        theme:'light'
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        $('body').removeAttr('class');
        $('body').addClass(this.state.theme+'-theme');
    }

    loadData = () => {
        const {movies} = this.state;
        let movie;
        //const url = `http://starlord.hackerearth.com/movies`;

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
    updateTheme = (theme) => {
        this.setState({theme:theme});
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
        if(type !== "genres" && type !== "budget"){
            list = movies.map((movie) => movie[type]);
        }else if(type === "budget"){
            let budget = movies.map((movie) => movie[type]);
            list = [0, Math.max(...budget)];
        }else{
            list = movies.map((movie) => movie[type]);
        }
        return [...new Set(list.flat())].sort().filter((el) => el !== "" );
    }

    toggleSort = (moviesList, type) => {
        const {movies, sorting} = this.state;
        movies.sort((obj1, obj2)=> {
            return obj1[type]-obj2[type];
        })
    }

    filterMovies = () => {
        const {movies, filterr} = this.state;
        let filterredMovies = movies;
        filterredMovies = movies.filter((movie) => {
            for (let key in filterr){
                if (filterr.hasOwnProperty(key)) {
                    if(key !== 'genres' && key !== 'actors' &&  key !== 'budget'){
                        if((filterr[key]=== 'all') || movie[key] === filterr[key]){
                            continue;
                        }else{
                            return false;
                        }
                    } else if(key !== 'budget') {
                        if((filterr[key]=== 'all') || movie[key].find((val) => val===filterr[key])){
                            continue;
                        }else{
                            return false;
                        }
                    } else {
                        if((filterr[key]=== 'all') || movie[key] < parseInt(filterr[key])){
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
        const {filterr,currentListStart, theme} = this.state;
        var moviesSet = this.filterMovies();
        this.toggleSort(moviesSet);
        var moviesList = this.displayCurrentList(moviesSet);
        this.toggleSort(moviesList);
        return (
            <Home
            moviesList = {moviesList}
            moviesSet = {moviesSet}
            filterr = {filterr}
            updatefilterr = {this.updatefilterr}
            currentListStart = {currentListStart}
            theme = {theme}
            updatecurrentListStart = {this.updatecurrentListStart}
            getFiltersData = {this.getFiltersData}
            updateTheme = {this.updateTheme}
            />
        );
        }
    }

export default App;
