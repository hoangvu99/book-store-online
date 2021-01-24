import React, { Component } from 'react';
import BlogProduct from './Blog-Right-Content-Pr/BlogProduct';

class BlogRightContent extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-7">
                <div className="row">
                    <BlogProduct></BlogProduct>
                    <BlogProduct></BlogProduct>
                    <BlogProduct></BlogProduct>
                    <BlogProduct></BlogProduct>
                    <BlogProduct></BlogProduct>
                    <BlogProduct></BlogProduct>
                    <div className="col-lg-12">
                        <div className="product__pagination blog__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i className="fa fa-long-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogRightContent;