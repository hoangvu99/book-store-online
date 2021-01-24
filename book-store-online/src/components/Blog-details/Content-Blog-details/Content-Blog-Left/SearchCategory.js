import React, { Component } from 'react';

class SearchCategory extends Component {
    render() {
        return (
            <a href="#">{this.props.name}</a>
        );
    }
}

export default SearchCategory;