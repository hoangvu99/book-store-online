import React, { Component } from 'react';
import ContentBlogAcc from './ContentBlogAcc';
import ContentBlogText from './ContentBlogText';

class ContentBlogRight extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
                <ContentBlogText {...this.props}></ContentBlogText>
                <ContentBlogAcc></ContentBlogAcc>
            </div>
        );
    }
}

export default ContentBlogRight;