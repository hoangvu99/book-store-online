import React, { Component } from 'react';
import Image from '../../img/blog/blog-1.jpg';
class CardMyLike extends Component {
    render() {
      const imagePath = require("../../img/blog/"+this.props.blog.imagePath)
      console.log()
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={imagePath.default} alt="" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                      </ul>
                      <h5><a href={"http://localhost:3000/blog/"+this.props.blog.id}>{this.props.blog.title}</a></h5>
                      <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default CardMyLike;