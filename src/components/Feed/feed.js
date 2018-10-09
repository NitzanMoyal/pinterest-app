import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import './feed.css'
import Pin from './Pin/pin';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0.2,
    horizontalOrder: true,
    columnWidth: 200
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Feed extends Component {

render() {
   
    const childElements = this.props.pins.map(pin => {
            return ( 
            <li key={pin._id} className="image-element-class">
                <img src={pin.imageURL} />
                <div className="pin-title">{pin.name}</div>
            </li>
        );
    });

    return (
        <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
            {childElements}
        </Masonry>
    );
}
}


export default Feed;