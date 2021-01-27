import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTop from '../components/template/HeaderTop';
import Container from '../components/template/Container';
import Hero from '../components/template/Hero';
import Footer from '../components/template/Footer';
import Breadcrumb from '../components/shop-grid/Breadcrumb';
import ProductItemDetails from '../components/view-product/ProductItemDetails';
import TabContent from '../components/view-product/TabContent';
import Menu from '../components/shop-grid/Menu';
import RelatedBook from '../components/view-product/RelatedBook';
import {books} from '../components/data';
class ViewProduct extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        
        
           
                
            
        
        const book = books.find(bookItem => {
           return  bookItem.id == this.props.id
        });
       
      

        const listRelatedBook = books.filter(e =>{
            return e.categoryId === book.categoryId;
        })

        

        return (
            <div>
                <HeaderTop />
                <Container />
                <Menu/>
                <Breadcrumb title={'Vegetable’s Package'}/>
                <ProductItemDetails book={book}></ProductItemDetails> 
                <RelatedBook listRelatedBook={listRelatedBook}></RelatedBook>
                <Footer />
            </div>
        );
    }
}


ViewProduct.propTypes = {

};


export default ViewProduct;
