import React, { Component } from 'react';
import BlogItem from './Blog-Right-Content-Pr/BlogItem';
import {blogs} from '../../../data';
class BlogRightContent extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-7">
                <div className="row">
                    
                    {blogs.map(blogItem =>{
                        return <BlogItem blog={blogItem}></BlogItem>
                    })}

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