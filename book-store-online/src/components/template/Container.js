import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

class Container extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="http://localhost:3000"><img src={logo} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/books">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./book/1">Shop Details</a></li>
                                    <li><a href="./cart">Cart</a></li>
                                    <li><a href="./checko-out">Check Out</a></li>
                                    <li><a href="./blog/1">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blogs">Blog</a></li>
                           
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>0</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i> <span>0</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>0đ</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
        );
    }
}


Container.propTypes = {

};


export default Container;
