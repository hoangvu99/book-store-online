import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductItem extends Component {
    render() {

        const imagePath = require("../img/product/product-1.jpg");
        const addBackgroundImage = {
            backgroundImage:"url("+window.location.href+imagePath.default+")"
            
            
        }

        return (
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={addBackgroundImage}>
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">{this.props.productName}</a></h6>
                        <h5>{this.props.productPrice}</h5>
                    </div>
                </div>
            </div>
        );
    }
}


ProductItem.propTypes = {

};


export default ProductItem;
