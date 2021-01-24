import React, { Component } from 'react';
import Image from '../../../../img/blog/blog-2.jpg'

class BlogProduct extends Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="blog__item">
                    <div className="blog__item__pic">
                    <img src={Image} alt="" />
                    </div>
                    <div className="blog__item__text">
                    <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                    </ul>
                    <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                        quaerat </p>
                    <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogProduct;