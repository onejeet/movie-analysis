import React,{ Component } from 'react';
import Page from './Page';
import '../sass/style.scss';
import $ from 'jquery';

class Home extends Component {

    generatePaginationIds = () => {
        const {moviesSet, currentListStart}  = this.props;
        let pages = [];
        if(moviesSet[currentListStart-10] !== undefined){
            pages[0] = currentListStart-10;
        }else{
            pages[0] = null;
        }

        if(moviesSet[currentListStart+10] !== undefined){
            pages[1] = currentListStart+10;
        }else{
            pages[1] = null;
        }
        return pages;
    }


    render() {
        const { updatecurrentListStart } = this.props;
        let pages = this.generatePaginationIds();
        return (
            <ul>
                {pages[0] !== null ? <Page
                pageid = {pages[0]}
                updatecurrentListStart = {updatecurrentListStart}
                icon = 'fa-chevron-circle-left'
                /> : ''}
                {pages[1] !== null ? <Page
                pageid = {pages[1]}
                updatecurrentListStart = {updatecurrentListStart}
                icon = 'fa-chevron-circle-right'
                /> : ''}
            </ul>
        );
    }
}

export default Home;
