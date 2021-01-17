import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SlideItem extends Component {

    constructor(props) {
        super(props);
        
    }
    

    render() {

         

        return (
            <div className="categories__item set-bg"  >
                <h5><a href="#">{this.props.categoryName}</a></h5>
            </div>
        );
    }
}


SlideItem.propTypes = {

};


export default SlideItem;
