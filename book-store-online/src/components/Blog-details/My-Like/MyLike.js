import React, { Component } from 'react';
import CardMyLike from './CardMyLike';

class MyLike extends Component {
    render() {
        return (
            <section className="related-blog spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title related-blog-title">
                    <h2>Post You May Like</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <CardMyLike></CardMyLike>
                <CardMyLike></CardMyLike>
                <CardMyLike></CardMyLike>
                </div>
            </div>
          </section>
        );
    }
}

export default MyLike;