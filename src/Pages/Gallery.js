import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

function Gallery () {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(() => {

        // axios.get(`/api/students`).then(res=>{
        //     if(res.status === 200)
        //     { 
        //         setStudents(res.data.students)
        //         setLoading(false);
        //     }
        // });

    }, []);

    
    return ( 
        // <!--site-main start-->
        <div className="site-main">

            {/* <!-- project-section --> */}
            <section className="ttm-row project-section clearfix">
                <div className="container">
                    <div className="row multi-columns-row ttm-boxes-spacing-10px">
                        {/* <!-- row --> */}
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid" 
                                    src="images/portfolio/01.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/01.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Robotics in Harvests</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Fresh Garden</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid"
                                     src="images/portfolio/02.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/02.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">The Farming Season</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Dairy Farm</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid" 
                                    src="images/portfolio/03.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/03.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Natural Stone Walks</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Garden Care</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid" 
                                    src="images/portfolio/04.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay">
                                     {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" 
                                         href="images/portfolio/04.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Barley Crop Field</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Dairy Farm</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid"
                                     src="images/portfolio/05.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay">
                                     {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/05.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Garden Supplies</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Garden Care</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid" 
                                    src="images/portfolio/06.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/06.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Organic Cultural Effect</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Fresh Garden, Dairy Farm</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid" 
                                    src="images/portfolio/01.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/01.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Robotics in Harvests</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Fresh Garden</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    <img width="722" height="570" className="img-fluid" src="images/portfolio/02.jpg" alt="image">

                                    </img>
                              </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/02.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">The Farming Season</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Dairy Farm</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            {/* <!-- featured-imagebox --> */}
                            <div className="featured-imagebox featured-imagebox-portfolio style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail--> */}
                                    <img width="722" height="570" className="img-fluid"
                                     src="images/portfolio/03.jpg" alt="image"></img>
                                </div>
                                {/* <!-- featured-thumbnail END--> */}
                                <div className="ttm-box-view-overlay"> 
                                {/* <!-- ttm-box-view-overlay --> */}
                                    <div className="ttm-media-link">
                                        {/* <!-- ttm-media-link--> */}
                                        <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" href="images/portfolio/03.jpg" data-rel="prettyPhoto">
                                            <i className="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="featured-content">
                                         {/* <!-- featured-content--> */}
                                        <div className="featured-title">
                                            {/* <!-- featured-title--> */}
                                            <h3><a href="detail-style-01.html">Natural Stone Walks</a></h3>
                                        </div>
                                        <div className="category">
                                            {/* <!-- category --> */}
                                            <p>Garden Care</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ttm-box-view-overlay end--> */}
                            </div>
                            {/* <!-- featured-imagebox --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
            </section>

        </div>
    );
}
export default Gallery;
