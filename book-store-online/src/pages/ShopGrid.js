import React, { Component } from 'react';
import HeaderTop from '../components/index/HeaderTop';
import Footer from '../components/index/Footer';
import Container from '../components/index/Container';
import Breadcrumb from '../components/shop-grid/Breadcrumb';
import ProductFilterable from '../components/shop-grid/ProductFilterable';
import PropTypes from 'prop-types';
import Hero from '../components/index/Hero';
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
