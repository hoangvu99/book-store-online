import React, { Component } from 'react';
import HeroBlog from '../components/Blog-details/HeroBlog';
import Title from '../components/Blog-details/Title';
import ContentBlog from '../components/Blog/Content-Blog/ContentBlog';
import Container from '../components/index/Container';
import Footer from '../components/index/Footer';
import HeaderTop from '../components/index/HeaderTop';

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