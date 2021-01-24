import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../index/CategoryItem';
import ProductItem from './ProductItem';

class ProductFilterable extends Component {
    render() {
        return (
            <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Department</h4>
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
                        <div className="sidebar__item">
                            <h4>Price</h4>
                            <div className="price-range-wrap">
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="540">
                                    <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                </div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__item sidebar__item__color--option">
                            <h4>Colors</h4>
                            <div className="sidebar__item__color sidebar__item__color--white">
                                <label for="white">
                                    White
                                    <input type="radio" id="white"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Gray
                                    <input type="radio" id="gray"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--red">
                                <label for="red">
                                    Red
                                    <input type="radio" id="red"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--black">
                                <label for="black">
                                    Black
                                    <input type="radio" id="black"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--blue">
                                <label for="blue">
                                    Blue
                                    <input type="radio" id="blue"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--green">
                                <label for="green">
                                    Green
                                    <input type="radio" id="green"/>
                                </label>
                            </div>
                        </div>
                        <div className="sidebar__item">
                            <h4>Popular Size</h4>
                            <div className="sidebar__item__size">
                                <label for="large">
                                    Large
                                    <input type="radio" id="large"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="medium">
                                    Medium
                                    <input type="radio" id="medium"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="small">
                                    Small
                                    <input type="radio" id="small"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="tiny">
                                    Tiny
                                    <input type="radio" id="tiny"/>
                                </label>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        <ProductItem productName={'Crab Pool Security'} productPrice={'$30.00'} ></ProductItem>
                        
                    </div>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}


ProductFilterable.propTypes = {

};


export default ProductFilterable;
