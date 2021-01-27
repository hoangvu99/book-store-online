import React, { Component } from 'react';

import Breadcrumb from '../components/shop-grid/Breadcrumb';
import ProductFilterable from '../components/shop-grid/ProductFilterable';
import PropTypes from 'prop-types';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
import Menu from '../components/shop-grid/Menu';


class ShopGrid extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Menu />
                <Breadcrumb title={'Organi Shop'} />
                <ProductFilterable />
                <Footer />
            </div>
        );
    }
}


ShopGrid.propTypes = {

};


export default ShopGrid;
