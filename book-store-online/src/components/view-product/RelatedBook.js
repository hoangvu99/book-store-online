import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureProductItem from '../index/FeatureProductItem';


class RelatedBook extends Component {
    render() {
        
        return (
            <section className="related-product">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <FeatureProductItem book={this.props.listRelatedBook[2]}/>
                <FeatureProductItem book={this.props.listRelatedBook[3]}/>
                <FeatureProductItem book={this.props.listRelatedBook[4]}/>
                <FeatureProductItem book={this.props.listRelatedBook[5]}/>
            </div>
        </div>
    </section>
        );
    }
}


RelatedBook.propTypes = {

};


export default RelatedBook;
