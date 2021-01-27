import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.handleMouseOutEvent = this.handleMouseOutEvent.bind(this);
        this.handleMouseOverEvent = this.handleMouseOverEvent.bind(this);
        
    }
    
    handleMouseOverEvent(e){
        e.target.style.background="#7fad39";
        e.target.style.color ="#fff";
    }
    handleMouseOutEvent(e){
       e.target.style.background="#fff";
       e.target.style.color ="black";
    }

    render() {
        const categoryName = this.props.categoryName;
        return (
            <li onMouseOver={this.handleMouseOverEvent} onMouseOut={this.handleMouseOutEvent} ><a href="#">{categoryName}</a></li>
        );
    }
}


CategoryItem.propTypes = {

};


export default CategoryItem;
