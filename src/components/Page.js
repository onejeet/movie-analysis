import React,{ Component } from 'react';
import '../sass/style.scss';


class Page extends Component {


    render() {
        const {pageid, icon, updatecurrentListStart} = this.props;
        return (
            <li id={pageid} className={"class-"+pageid} onClick = {(e) => updatecurrentListStart(e)}>{icon}</li>
        );
    }
}

export default Page;
