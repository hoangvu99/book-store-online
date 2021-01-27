import React, { Component } from 'react';
import Image from '../../../../img/blog/blog-2.jpg'

class BlogProduct extends Component {

    constructor(props) {
        super(props);
        
    }
    
    handleClick(){
        window.location.href="http://localhost:3000/blog/" + this.props.blog.id;
    }

    render() {

        const imagePath = require('../../../../img/blog/'+this.props.blog.imagePath);
        
        return (
            <div className="col-lg-6 col-md-6 col-sm-6" onClick={this.handleClick.bind(this)} >
                <div className="blog__item">
                    <div className="blog__item__pic">
                    <img src={imagePath.default} alt="" />
                    </div>
                    <div className="blog__item__text">
                    <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                    </ul>
                    <h5><a href="#">{this.props.blog.title}</a></h5>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                        quaerat </p>
                    <a href="#" className="blog__btn">READ MORE <span> <i className="fa fa-arrow-right"></i></span> </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogProduct;