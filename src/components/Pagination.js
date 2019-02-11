import React,{ Component } from 'react';
import Page from './Page';
import '../sass/style.scss';
import $ from 'jquery';

class Home extends Component {

    generatePagination = () => {
        const {movies, currentListStart}  = this.props;
        let totalMovies = movies.length;
        let totalPages = totalMovies/10;
        let pages = [];
        for( let i = 0; i< totalPages; i++){
            pages.push(i+1);
        }
        return pages;
    }


    render() {
        const {moviesList, currentListStart, updatecurrentListStart} = this.props;
        let pages = this.generatePagination();

        return (
            <ul>
                {pages.map((page, i) =>
                    <Page
                    key = {page}
                    page = {page}
                    updatecurrentListStart = {updatecurrentListStart}
                    />
                )}
            </ul>
        );
    }
}

export default Home;
