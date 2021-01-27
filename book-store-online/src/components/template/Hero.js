import React, { Component } from 'react';
import PropTypes from 'prop-types';
import banner from '../img/banner/banner.jpg';
import Category from '../index/Category';
class Hero extends Component {
    render() {

        const bgstyle = {
            backgroundImage: "url("+banner+")"
        }
        return (
            <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Category />
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item set-bg" style={bgstyle} data-setbg={banner}>
                            <div className="hero__text">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
        );
    }
}


Hero.propTypes = {

};


export default Hero;
