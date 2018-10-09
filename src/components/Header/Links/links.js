import React, { Component } from 'react';
import './links.css';
import { ChatIcon, NotificationIcon, MoreIcon} from '../../Common/ProjectIcons'

class Links extends Component {

    render() {
        return (
            <div className="links-container">
                <a href="#/users/123">Home</a>
                <a href="#/users/123">Following</a>
                <a href="#/users/123">Explore</a>
                <a href="#">
                <img className="user-img" src="https://scontent.fsdv1-1.fna.fbcdn.net/v/t1.0-9/29176679_10213477951756449_5394599360449727651_n.jpg?_nc_cat=0&oh=9a2f71fc26c9df27341f1697f156a4bd&oe=5BFBC2D2"/>
                Nitzan
            </a>
            <a>
                <ChatIcon/>
            </a>
            <a><NotificationIcon/></a>
            <a><MoreIcon/></a>
            </div>
        )
    }
}

export default Links;