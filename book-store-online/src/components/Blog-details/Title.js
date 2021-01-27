import React, { Component } from 'react';
import image from '../img/blog/details/details-hero.jpg';

class Title extends Component {
    
    
    render() {
        const bgstyle = {
            backgroundImage: "url("+image+")"
        }
        return (
            <section className="blog-details-hero set-bg" style={bgstyle} >
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="blog__details__hero__text">
                        <h2>{this.props.nametitle}</h2>
                        <ul>
                        <li>By Michael Scofield</li>
                        <li>January 14, 2019</li>
                        <li>8 Comments</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Title;