import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Interact from '../functions/Interact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class FeatureProductItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(e){
       window.location.href="http://localhost:3000/book/"+this.props.book.id;
    }

    render() {

        const imagePath = require("../img/product/"+this.props.book.imagePath);

        
        
        const featureProductItemStyle = {
            backgroundImage:"url("+imagePath.default+")"
            
            
        }

        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" onClick={this.handleClick} >
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg"  style={featureProductItemStyle} >
                            <ul className="featured__item__pic__hover">
                                <Interact ></Interact>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#">{this.props.book.name}</a></h6>
                            <h5>{this.props.book.price} vnd</h5>
                        </div>
                    </div>
                </div>
        );
    }
}


FeatureProductItem.propTypes = {

};


export default FeatureProductItem;
