import React, { Component } from 'react';
import ContentBlogDetails from '../components/Blog-details/Content-Blog-details/ContentBlogDetails';
import HeroBlog from '../components/Blog-details/HeroBlog';
import MyLike from '../components/Blog-details/My-Like/MyLike';
import Title from '../components/Blog-details/Title';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
import {blogs} from '../components/data'

class BlogDetails extends Component {
    render() {
        const blog = blogs.find(blogItem =>{
            return blogItem.id == this.props.id;
        })
        console.log(blog)
        return (
            <div>
                <HeaderTop></HeaderTop>
                <Container></Container>
                <HeroBlog></HeroBlog>
                <Title nametitle={blog.title}></Title>
                <ContentBlogDetails content={blog.content} imagePath={blog.imagePath}></ContentBlogDetails>
                <MyLike blogs={blogs}></MyLike>
                <Footer></Footer>
            </div>
        );
    }
}

export default BlogDetails;