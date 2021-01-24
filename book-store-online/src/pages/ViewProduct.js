import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/index/HeaderTop';
import Footer from '../components/index/Footer';
import Container from '../components/index/Container';
import Breadcrumb from '../components/shop-grid/Breadcrumb';
import ProductItemDetails from '../components/view-product/ProductItemDetails';
import TabContent from '../components/view-product/TabContent';
class ViewProduct extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Breadcrumb title={'Vegetable’s Package'}/>
                <ProductItemDetails></ProductItemDetails> 
                
                <Footer />
            </div>
        );
    }
}


ViewProduct.propTypes = {

};


export default ViewProduct;
