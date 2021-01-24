import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Breadcrumb extends Component {
    render() {

        const imagePath = require("../img/breadcrumb.jpg");
        const addBackgroundImage = {
            backgroundImage:"url("+window.location.href+imagePath.default+")"
            
            
        }

        return (
            <section className="breadcrumb-section set-bg" style={addBackgroundImage}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{this.props.title}</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


Breadcrumb.propTypes = {

};


export default Breadcrumb;
