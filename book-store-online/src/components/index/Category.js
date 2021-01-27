import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import {categories} from '../data.js'
class Category extends Component {

    constructor(props) {
        super(props);
        
        
    }
    
    

    render() {
        
        return (
            <div className="hero__categories">
                <div className="hero__categories__all">
                    <i className="fa fa-bars"></i>
                    <span>All departments</span>
                </div>
                <ul> 
                    {
                        categories.map(item => {
                            
                            return <CategoryItem key={item.id}  categoryName={item.name} />
                   
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}


Category.propTypes = {

};


export default Category;
