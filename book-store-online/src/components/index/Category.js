import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

class Category extends Component {
    render() {
        
        return (
            <div className="hero__categories">
                <div className="hero__categories__all">
                    <i className="fa fa-bars"></i>
                    <span>All departments</span>
                </div>
                <ul>
                    <CategoryItem categoryName={'Fresh Meat'} />
                    <CategoryItem categoryName={'Vegetables'} />
                    <CategoryItem categoryName={'Fruit & Nut Giftst'} />
                    <CategoryItem categoryName={'Fresh Berries'} />
                    <CategoryItem categoryName={'Ocean Foodst'} />
                    <CategoryItem categoryName={'Butter & Eggs'} />
                    <CategoryItem categoryName={'Fastfood'} />
                    <CategoryItem categoryName={'Papayaya & Crisps'} />
                    <CategoryItem categoryName={'Oatmeal'} />
                    <CategoryItem categoryName={'Fresh Meat'} />
                    <CategoryItem categoryName={'Fresh Bananas'} />
                    
                </ul>
            </div>
        );
    }
}


Category.propTypes = {

};


export default Category;
