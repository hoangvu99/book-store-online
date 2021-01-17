import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CategoryItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const categoryName = this.props.categoryName;
        return (
            <li><a href="#">{categoryName}</a></li>
        );
    }
}


CategoryItem.propTypes = {

};


export default CategoryItem;
