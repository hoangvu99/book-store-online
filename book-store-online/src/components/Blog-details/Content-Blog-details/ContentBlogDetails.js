import React, { Component } from 'react';
import ContentBlogLeft from './Content-Blog-Left/ContentBlogLeft';
import ContentBlogRight from './Content-Blog-Right/ContentBlogRight';

class ContentBlogDetails extends Component {
    render() {
        return (
            <section className="blog-details spad">
                <div className="container">
                    <div className="row">
                        <ContentBlogLeft></ContentBlogLeft>
                        <ContentBlogRight></ContentBlogRight>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentBlogDetails;