import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductItem extends Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(e){
        window.location.href="http://localhost:3000/book/"+this.props.book.id;
     }
 

    render() {

        const imagePath = require("../img/product/"+ this.props.book.imagePath);
        const addBackgroundImage = {
            backgroundImage:"url("+imagePath.default+")"
            
            
        }
        
        return (
            <div class="col-lg-4 col-md-6 col-sm-6" onClick={this.handleClick} >
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={addBackgroundImage}>
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                          
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">{this.props.book.name}dad</a></h6>
                        <h5>{this.props.book.price}đ</h5>
                    </div>
                </div>
            </div>
        );
    }
}


ProductItem.propTypes = {

};


export default ProductItem;
