import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/index/HeaderTop';
import Footer from '../components/index/Footer';
import Breadcrumb from '../components/shop-grid/Breadcrumb';
import Container from '../components/index/Container';
import Hero from '../components/index/Hero';
import Menu from '../components/shop-grid/Menu';
import Checkoutdetail from '../components/check-out/Checkoutdetail';

class Checkout extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Menu />
                <Breadcrumb title={"Check out"}/>
                <Checkoutdetail />
                <Footer />

            </div>
        );
    }
}


Checkout.propTypes = {

};


export default Checkout;
