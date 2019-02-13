import React,{ Component } from 'react';
import '../sass/style.scss';


class Page extends Component {


    render() {
        const {pageid, icon, updatecurrentListStart} = this.props;
        return (
            <li><i id={pageid} onClick = {(e) => updatecurrentListStart(e)} className={"fa "+icon} aria-hidden="true"></i></li>
        );
    }
}

export default Page;
