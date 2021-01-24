import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TabNavItem extends Component {



    render() {
        return (
            <li className="nav-item">
                <a className="nav-link active"  onClick={ (e) =>{ this.props.handleClick(e) } } >{this.props.field}</a>
            </li>
        );
    }
}


TabNavItem.propTypes = {

};


export default TabNavItem;
