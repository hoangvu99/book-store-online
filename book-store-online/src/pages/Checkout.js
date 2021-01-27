import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../components/shop-grid/Breadcrumb';

import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
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
