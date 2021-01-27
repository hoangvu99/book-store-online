import React, { Component } from 'react';
import imageSrc from '../../../img/blog/sidebar/sr-1.jpg';

class RecentNews extends Component {
    render() {
        const imagePath = require('../../../img/blog/'+this.props.imagePath);
        const imageStyle = {
            width : "70px",
            height: "70px"
        }
        return (
            <a href="#" className="blog__sidebar__recent__item">
                <div className="blog__sidebar__recent__item__pic">
                    <img src={imagePath.default} alt=""  style={imageStyle}/>
                </div>
                <div className="blog__sidebar__recent__item__text">
                    <h6>{this.props.nameRecent}</h6>
                    <span>{this.props.timeRecent}</span>
                </div>
            </a>
);
    }
}

export default RecentNews;