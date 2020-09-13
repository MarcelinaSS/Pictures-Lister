import React from 'react';
import './Images.css'

const Images = (props) => {

    const images = props.images.map((image) => {

        var sources = 'http://source.unsplash.com/'+image.url.substr(image.url.length - 11)
    return <img key={image.id} src={sources} alt='random'/>

    });

    const start = props.first
    const end = props.third

return <div className='images'>{images.slice(start,end)}</div>
};

export default Images;
