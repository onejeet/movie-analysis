import React,{ Component } from 'react';
import '../sass/style.scss';


class Page extends Component {


    render() {
        const {page, updatecurrentListStart} = this.props;
        return (
            <li id={page} className={"class-"+page} onClick = {(e) => updatecurrentListStart(e)}>{page}</li>
        );
    }
}

export default Page;
