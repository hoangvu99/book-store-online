import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabNavItem from './TabNavItem';


class TabContent extends Component {

    constructor(props) {
        super(props);
        this.state = {tabSelected:'Description'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({tabSelected: e.target.text});
    }

    render() {
        
        const Description = "This is a Products Description";
        const Information = "This is a Products Information";
        const Reviews = "This is a Products Reviews";

        const tabPaneSelected = this.state.tabSelected === "Description" ? Description : this.state.tabSelected === "Information" ? Information : Reviews;

        return (
            <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <TabNavItem field={'Description'}  handleClick={this.handleClick} />
                            <TabNavItem field={'Information'}  handleClick={this.handleClick}/>
                            <TabNavItem field={'Reviews'}      handleClick={this.handleClick}/>
                            
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    <h6>Product {this.state.tabSelected}</h6>
                                    <p>{tabPaneSelected}</p>
                                </div>
                            </div>
                            
                              
                        </div>
                    </div>
                </div>
        );
    }
}


TabContent.propTypes = {

};


export default TabContent;
