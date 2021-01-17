import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/index/HeaderTop';
import Container from '../components/index/Container';
import Hero from '../components/index/Hero';
import Slide from './../components/index/Slide';
import FeatureProduct from '../components/index/FeatureProduct';
import BlogSection from '../components/index/BlogSection';
import Footer from '../components/index/Footer';


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
