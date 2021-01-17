import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BlogItem extends Component {
    render() {
        console.log(this.props.blogImagePath)
        const image = this.props.blogImagePath;
        const imagePath = require('../img/blog/blog-2.jpg');
        
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src={imagePath.default} alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
        );
    }
}


BlogItem.propTypes = {

};


export default BlogItem;
