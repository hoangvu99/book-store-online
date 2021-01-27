import React, { Component } from 'react';
import HeroBlog from '../components/Blog-details/HeroBlog';
import Title from '../components/Blog-details/Title';
import ContentBlog from '../components/Blog/Content-Blog/ContentBlog';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
class Blog extends Component {
    render() {
        return (
            <div>
                <HeaderTop></HeaderTop>
                <Container></Container>
                <HeroBlog></HeroBlog>
                <Title nametitle={'BLOG'}></Title>
                <ContentBlog></ContentBlog>
                <Footer></Footer>
            </div>
        );
    }
}

export default Blog;