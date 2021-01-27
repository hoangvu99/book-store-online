import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../index/CategoryItem';
import ProductItem from './ProductItem';
import {books,categories} from '../data';
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
                            {
                                categories.map(item => {
                            
                            return <CategoryItem key={item.id}  categoryName={item.name} />
                   
                        })
                    }
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
                            <h4>Hình thức</h4>
                            <div className="sidebar__item__color sidebar__item__color--white">
                                <label for="white">
                                    Bìa mềm
                                    <input type="radio" id="white"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Bìa Cứng
                                    <input type="radio" id="gray"/>
                                </label>
                            </div>
                            
                            
                        </div>
                        <div className="sidebar__item">
                            <h4>Nhà Xuất Bản</h4>
                            <div className="sidebar__item__size">
                                <label for="large">
                                    Minh Long
                                    <input type="radio" id="large"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="medium">
                                    NXB Trẻ
                                    <input type="radio" id="medium"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="small">
                                    Dong A
                                    <input type="radio" id="small"/>
                                </label>
                            </div>
                            <div className="sidebar__item__size">
                                <label for="tiny">
                                    Alpha Books
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
                        <ProductItem book={books[2]} ></ProductItem>
                        <ProductItem book={books[5]} ></ProductItem>
                        <ProductItem book={books[8]} ></ProductItem>
                        <ProductItem book={books[96]} ></ProductItem>
                        <ProductItem book={books[34]} ></ProductItem>
                        <ProductItem book={books[17]} ></ProductItem>
                        <ProductItem book={books[25]} ></ProductItem>
                        <ProductItem book={books[32]} ></ProductItem>
                        <ProductItem book={books[11]} ></ProductItem>
                        
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
