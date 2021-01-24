import React, { Component } from 'react';
import Image from '../../img/blog/blog-1.jpg';
class CardMyLike extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={Image} alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                      </ul>
                      <h5><a href="#">Cooking tips make cooking simple</a></h5>
                      <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default CardMyLike;