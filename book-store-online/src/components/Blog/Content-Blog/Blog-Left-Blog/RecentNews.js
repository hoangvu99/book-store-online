import React, { Component } from 'react';
import imageSrc from '../../../img/blog/sidebar/sr-1.jpg';

class RecentNews extends Component {
    render() {
        return (
            <a href="#" className="blog__sidebar__recent__item">
                <div className="blog__sidebar__recent__item__pic">
                    <img src={imageSrc} alt="" />
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