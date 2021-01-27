import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureProductItem from './FeatureProductItem';
import {books} from '../data';
import {a} from '../data'
class FeatureProduct extends Component {
    render() {
        
        
        return (
            <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Sách bán chạy trong tuần</li>
                            <li data-filter=".fresh-meat">Sách mới nhất</li>
                            <li data-filter=".vegetables">Sách được tìm kiếm nhiều nhất</li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
                <FeatureProductItem book={books[0]}/>
                <FeatureProductItem book={books[1]}/>
                <FeatureProductItem book={books[2]}/>
                <FeatureProductItem book={books[3]}/>
                <FeatureProductItem book={books[4]}/>
                <FeatureProductItem book={books[5]}/>
                <FeatureProductItem book={books[6]}/>
                <FeatureProductItem book={books[7]}/>
                
                
                
                
            </div>
        </div>
    </section>
        );
    }
}


FeatureProduct.propTypes = {

};


export default FeatureProduct;
