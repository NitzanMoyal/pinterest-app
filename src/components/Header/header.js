import React, { Component } from 'react';
import './header.css';
import Search from './Search/search';
import Links from './Links/links';
import { HeaderLogo } from '../Common/ProjectIcons';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <HeaderLogo />
                <Search />
                <Links />
            </div>
        )
    }
}

export default Header;