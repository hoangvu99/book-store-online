import React, { Component } from 'react';
import CategoryBlogDetail from './CategoryBlogDetail';
import RecentNews from './RecentNews';
import SearchCategory from './SearchCategory';

class ContentBlogLeft extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                    <div className="blog__sidebar">
                        <div className="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button type="submit"><span className="icon_search" /></button>
                            </form>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">All</a></li>
                                <CategoryBlogDetail nameCategory={'Beauty'} sl={'20'}></CategoryBlogDetail>                                
                                <CategoryBlogDetail nameCategory={'Food'} sl={'5'}></CategoryBlogDetail>
                                <CategoryBlogDetail nameCategory={'Life Style'} sl={'5'}></CategoryBlogDetail>
                                <CategoryBlogDetail nameCategory={'Travel'} sl={'5'}></CategoryBlogDetail>
                            </ul>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div className="blog__sidebar__recent">
                                <RecentNews nameRecent={'09 Kinds Of Vegetables Protect The Liver'} timeRecent={'MAR 05, 2019'}></RecentNews>
                                <RecentNews nameRecent={'Tips You To Balance Nutrition Meal Day'} timeRecent={'MAR 05, 2019'}></RecentNews>
                                <RecentNews nameRecent={'4 Principles Help You Lose Weight With Vegetables'} timeRecent={'MAR 05, 2019'}></RecentNews>

                            </div>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div className="blog__sidebar__item__tags">
                                <SearchCategory name={'Apple'}></SearchCategory>
                                <SearchCategory name={'Beauty'}></SearchCategory>
                                <SearchCategory name={'Vegetables'}></SearchCategory>
                                <SearchCategory name={'Fruit'}></SearchCategory>
                                <SearchCategory name={'Healthy Food'}></SearchCategory>
                                <SearchCategory name={'Lifestyle'}></SearchCategory>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ContentBlogLeft;