import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { icon } from '@fortawesome/fontawesome-svg-core';


class CartItem extends Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){

        this.props.handleDeleteEvent(this.props.book.id);
    }

    render() {

        const imagePath = require('../img/product/'+this.props.book.imagePath)
        const imageStyle = {
            width: "100px",
            heigh: "100px"
        }
        
        const textStyle = {
            color :"#F7941E"
        }

        const iconStyle = {
            color:"red"
        }
        return (
            <tr>
                <td class="shoping__cart__item">
                    <img src={imagePath.default} alt="" style={imageStyle} />
                    <h5>{this.props.book.name}</h5>
                </td>
                <td class="shoping__cart__price" style={textStyle}>
                   {this.props.book.price}đ
                                    </td>
                <td class="shoping__cart__quantity">
                    <div class="quantity">
                        <div class="pro-qty">
                            <input type="number" min="1" placeholder="1"/>
                        </div>
                    </div>
                </td>
                <td class="shoping__cart__total" style={textStyle}>
                    {this.props.book.price}đ
                                    </td>
                <td class="shoping__cart__item__close">
                    <span ><i class="fa fa-times" style={iconStyle} onClick={this.handleClick}></i></span>
                </td>
            </tr>
        );
    }
}


CartItem.propTypes = {

};


export default CartItem;
