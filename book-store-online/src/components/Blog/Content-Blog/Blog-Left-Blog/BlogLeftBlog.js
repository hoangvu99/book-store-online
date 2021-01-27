import React, { Component } from 'react';
import SearchCategory from '../../../Blog-details/Content-Blog-details/Content-Blog-Left/SearchCategory';
import BlogCategory from './BlogCategory';
import RecentNews from './RecentNews';
import {blogs} from '../../../data';
class BlogLeftBlog extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                    <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span ><i className="fa fa-search"></i> </span> </button>
                    </form>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul>
                                <BlogCategory nameCategory={'Beauty'} sl={'20'}></BlogCategory>                                
                                <BlogCategory nameCategory={'Food'} sl={'5'}></BlogCategory>
                                <BlogCategory nameCategory={'Life Style'} sl={'5'}></BlogCategory>
                                <BlogCategory nameCategory={'Travel'} sl={'5'}></BlogCategory>
                    </ul>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">
                        
                        {blogs.map(blogItem =>{
                            return <RecentNews nameRecent={blogItem.title} imagePath = {blogItem.imagePath} timeRecent={'MAR 05, 2019'}></RecentNews>
                        })}

                    </div>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">
                    <SearchCategory name={'nguyễn nhật ánh'}></SearchCategory>
                    <SearchCategory name={'làm bạn với bầu trời'}></SearchCategory>
                    <SearchCategory name={'sách tiếng anh'}></SearchCategory>
                    
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default BlogLeftBlog;