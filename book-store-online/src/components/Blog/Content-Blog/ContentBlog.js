import React, { Component } from 'react';
import ContentBlogLeft from '../../Blog-details/Content-Blog-details/Content-Blog-Left/ContentBlogLeft';
import BlogLeftBlog from './Blog-Left-Blog/BlogLeftBlog';
import BlogRightContent from './Blog-Right-Content/BlogRightContent';

class ContentBlog extends Component {
    render() {
        return (
            <section className="blog spad">
                <div className="container">
                <div className="row">
                    <BlogLeftBlog></BlogLeftBlog>
                    <BlogRightContent></BlogRightContent>
                </div>
                </div>
            </section>
        );
    }
}

export default ContentBlog;