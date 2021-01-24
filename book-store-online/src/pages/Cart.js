import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/index/HeaderTop';
import Footer from '../components/index/Footer';
import Breadcrumb from '../components/shop-grid/Breadcrumb';
import Container from '../components/index/Container';

import Menu from '../components/shop-grid/Menu';
import CartDetails from '../components/cart/CartDetails';

class Cart extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Menu />
                <CartDetails />
                <Breadcrumb title={"Shopping Cart"}/>
                
                <Footer />

            </div>
        );
    }
}


Cart.propTypes = {

};


export default Cart;
