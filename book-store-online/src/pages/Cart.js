import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../components/shop-grid/Breadcrumb';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';

import Menu from '../components/shop-grid/Menu';
import CartDetails from '../components/cart/CartDetails';
import {books} from '../components/data'
class Cart extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Menu />
                <Breadcrumb title={"Shopping Cart"}/>
                <CartDetails books={books} />
                
                
                <Footer />

            </div>
        );
    }
}


Cart.propTypes = {

};


export default Cart;
