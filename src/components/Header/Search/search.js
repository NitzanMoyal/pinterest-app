import React, { Component } from 'react';
import './search.css';
import { SearchIcon } from '../../Common/ProjectIcons'


class Search extends Component {

    render() {
        return (
                <div className="search">
                <SearchIcon/>
                    <input className="search-box" type="text" name="name" placeholder="Search"
                    />
                </div>
        )
    }
}

export default Search;