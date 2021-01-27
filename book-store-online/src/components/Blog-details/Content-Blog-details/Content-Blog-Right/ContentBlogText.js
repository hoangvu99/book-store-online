import React, { Component } from 'react';
import Image from '../../../img/blog/details/details-pic.jpg'

class ContentBlogText extends Component {



    render() {

        const imagePath = require("../../../img/blog/"+this.props.imagePath)

        return (
            <div className="blog__details__text">
                    <img src={imagePath.default} alt="" />
                    <p>{this.props.content}</p>
                </div>
        );
    }
}

export default ContentBlogText;