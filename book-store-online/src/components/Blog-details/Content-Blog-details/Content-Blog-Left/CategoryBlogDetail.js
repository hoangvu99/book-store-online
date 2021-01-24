import React, { Component } from 'react';

class CategoryBlogDetail extends Component {
    render() {
        return (
            <li><a href="#">{this.props.nameCategory} ({this.props.sl})</a></li>
        );
    }
}

export default CategoryBlogDetail;