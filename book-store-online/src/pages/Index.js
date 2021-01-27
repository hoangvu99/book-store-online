import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
import FeatureProduct from '../components/index/FeatureProduct';
import BlogSection from '../components/index/BlogSection';



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
