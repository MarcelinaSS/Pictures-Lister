import React from 'react';
import axios from 'axios';
import Images from './Images'
import './RenderingImages.css'

class RenderingImages extends React.Component {
  state = { images: [],
            first: 0,
          third: 3 };
  
    componentDidMount() {

      axios.get('https://picsum.photos/v2/list')
        .then(res => {
          this.setState({ images: res.data})
            })
        .catch(err => {
              console.log(err);
          })
    }

    onClickB = () => {

      const nextFirst = this.state.first+3
      const nextThird = this.state.third+3

      if (nextThird > this.state.images.length) {
        this.setState ({ first: 0,
          third: 3})  
      } else {
        console.log(this.state)
        this.setState ({ first: nextFirst,
          third: nextThird})  
      }
    }
      

  render() {
    return (
      <div className="images-container">
        <div className="imagescontainer--list">
          <Images images={this.state.images} first={this.state.first} third={this.state.third}/>
        </div>
        <div className="images-container--button">
          <button id="next-button" onClick = {this.onClickB}>Next</button>
        </div>
      </div>
    );
  }
}

export default RenderingImages;
