import React, { Component } from 'react';
import PropTypes from 'prop-types';


class InputItem extends Component {
    render() {
        return (
            
                <div class="checkout__input">
                    <p>{this.props.label}<span>*</span></p>
                    <input type="text" />
                </div>
            
        );
    }
}


InputItem.propTypes = {

};


export default InputItem;
