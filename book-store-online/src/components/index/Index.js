import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from './HeaderTop';
import Container from './Container';
import Hero from './Hero';
import Slide from './Slide';
import FeatureProduct from './FeatureProduct';
import BlogSection from './BlogSection';
import Footer from './Footer';
class Index extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <Container />
                <Hero />
                <FeatureProduct/>
                <BlogSection/>
                <Footer />
            </div>
        );
    }
}


Index.propTypes = {

};


export default Index;
