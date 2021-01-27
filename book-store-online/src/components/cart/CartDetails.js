import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { books } from '../data';


class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { booksSelected : [books[40],books[23],books[95]] }
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }
    
    handleDeleteEvent(id){
        
        const {booksSelected} = this.state;

        const b = booksSelected.filter(i =>{
            return i.id != id;
        })
        
        this.setState({booksSelected : b});
        

    }

    render() {
        
        let total = 0;
        this.state.booksSelected.forEach(bookItem =>{
           total+= parseInt(bookItem.price);
        })
        
        return (
            <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.booksSelected.map(bookItem =>{
                                        return <CartItem book={bookItem} handleDeleteEvent={this.handleDeleteEvent} />
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="http://localhost:3000/" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>{
                                total
                            }.000đ</span></li>
                            <li>Total <span>{total}.000đ</span></li>
                        </ul>
                        <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}


CartDetails.propTypes = {

};


export default CartDetails;
