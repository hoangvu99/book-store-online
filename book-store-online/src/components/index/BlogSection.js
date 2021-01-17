import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';

class BlogSection extends Component {
    render() {
        return (
            <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <BlogItem imagePath= {"../img/blog/blog-2.jpg"}/>
                <BlogItem imagePath= {'../img/blog/blog-2.jpg'} />
                <BlogItem imagePath= {'../img/blog/blog-3.jpg'}/>
            </div>
        </div>
    </section>
        );
    }
}


BlogSection.propTypes = {

};


export default BlogSection;
