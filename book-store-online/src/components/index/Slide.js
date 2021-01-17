import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideItem from "./SlideItem";

class Slide extends Component {
    render() {
        return (
            
            <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <div className="col-md-3">
                            <SlideItem categoryName={'Fresh Meal'}/>
                        </div>
                        <div className="col-md-3">
                            <SlideItem categoryName={'Fresh Meal'}/>
                        </div>
                        <div className="col-md-3">
                            <SlideItem categoryName={'Fresh Meal'}/>
                        </div>
                        <div className="col-md-3">
                            <SlideItem categoryName={'Fresh Meal'}/>
                        </div>
                        <div className="col-md-3">
                            <SlideItem categoryName={'Fresh Meal'}/>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
        );
    }
}


Slide.propTypes = {

};


export default Slide;
