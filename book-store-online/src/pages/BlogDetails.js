import React, { Component } from 'react';
import ContentBlogDetails from '../components/Blog-details/Content-Blog-details/ContentBlogDetails';
import HeroBlog from '../components/Blog-details/HeroBlog';
import MyLike from '../components/Blog-details/My-Like/MyLike';
import Title from '../components/Blog-details/Title';
import Container from '../components/index/Container';
import Footer from '../components/index/Footer';
import HeaderTop from '../components/index/HeaderTop';


class BlogDetails extends Component {
    render() {
        return (
            <div>
                <HeaderTop></HeaderTop>
                <Container></Container>
                <HeroBlog></HeroBlog>
                <Title nametitle={'The Moment You Need To Remove Garlic From The Menu'}></Title>
                <ContentBlogDetails></ContentBlogDetails>
                <MyLike></MyLike>
                <Footer></Footer>
            </div>
        );
    }
}

export default BlogDetails;