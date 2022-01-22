import React, { useState, useEffect } from 'react';


import EventDetailsDataService from "../Services/EventDetailsService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


function EventDetails() {
    let params = useParams();

   const initialeventDetailsState = {
    id: null,
    title: "",
    details: ""
  };


  const [currenteventdetails, setCurrentEventDetails] = useState(initialeventDetailsState);
  const [message, setMessage] = useState("");



useEffect(() => {
    getEventDetails(params.id);
  }, [params.id]);


    const getEventDetails = id => {
    EventDetailsDataService.get(id)
      .then(response => {
         console.log("eventD", response);
        setCurrentEventDetails(response.data.event);
        console.log("eventD2", currenteventdetails);
      })
      .catch(e => {
        console.log(e);
      });
  };



    
     return ( 
        <div>
        {currenteventdetails ? (
        <div className="site-main">
            {/* <!-- project-section --> */}
            <section className="ttm-row project-details-one-section clearfix">
                <div className="container">
                    <div className="row"> 
                    {/* <!-- row --> */}
                        <div className="col-lg-6 col-xl-8">
                            {/* <!-- ttm_single_image-wrapper --> */}
                            <div className="ttm_single_image-wrapper mb-35">
                                <img width="1000" height="740" className="img-fluid" src="images/single-img-twenty.jpg" alt="single-img-twenty"/>
                            </div>
                            {/* <!-- ttm_single_image-wrapper end --> */}
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="ttm-pf-single-detail-box mb-35">
                                <div className="ttm-pf-single-title">
                                    <h3>EventDetails</h3>
                                </div>
                                <p>{currenteventdetails.title}</p>
                                <p>{currenteventdetails.details}</p>
                                <ul className="ttm-pf-detailbox-list">
                                   <li><i className="fa fa-user"></i><span> Client : </span>John Amanda</li>
                                   <li><i className="fa fa-bookmark-o"></i><span> Category :  </span>Business, Campaign</li>
                                   <li><i className="fa fa-calendar"></i><span> Date :  </span>6 June 19</li>
                                   <li><i className="ti ti-world"></i><span> Website : </span>IT-Tech.com</li>
                                   <li><i className="fa fa-map-marker"></i><span>Location : </span>New York</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Project Information</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their many web sites still in their infancy. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet page.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- project-section end --> */}
            
            
            
         {/* <div class="site-main"> */}

            {/* <!-- services-section --> */}
            <section className="ttm-row grid-section clearfix">
                <div className="container">
                    <div className="row">
                        {/* <!-- row --> */}
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" class="img-fluid" 
                                    src="images/team-member/team-img01.jpg" alt="image">
                                    </img>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Lara Christine</a></h3>
                                    </div>
                                    <p className="category">Landscaper</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" src="images/team-member/team-img05.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Carlos Moss</a></h3>
                                    </div>
                                    <p className="category">Landscaper</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" src="images/team-member/team-img02.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Dan Western</a></h3>
                                    </div>
                                    <p className="category">Landscaper</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" class="img-fluid" src="images/team-member/team-img04.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

           </div>
            </section>    




                  {/* <!-- element-row --> */}
            <section className="element-row element-style clearfix">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="section-title clearfix">
                            <h2 className="title">Team members</h2>
                        </div>
                    </div>
                    {/* <!-- row --> */}
                    <div className="row slick_slider ttm-boxes-spacing-15px" data-slick='{"slidesToShow": 3, "slidesToScroll": 3, "dots":false, "arrows":false, "autoplay":false, "infinite":true, "centerMode":false}'>
                        <div className="ttm-box-col-wrapper col-6 col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" 
                                    src="images/team-member/team-img01.jpg" alt="image"></img>
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Lara Christine</a></h3>
                                    </div>
                                    <p className="category">Landscaper</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-6 col-md-6 col-lg-4">
                            
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" 
                                    src="images/team-member/team-img02.jpg" alt="image"></img>
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Dan Western</a></h3>
                                    </div>
                                    <p className="category">Gardener</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-12 col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" 
                                    src="images/team-member/team-img03.jpg" alt="image"></img>
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Mark Steven</a></h3>
                                    </div>
                                    <p className="category">Landscaper</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                        <div className="ttm-box-col-wrapper col-12 d-none d-md-block col-md-6 col-lg-4">
                            {/* <!-- featured-imagebox-team --> */}
                            <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="500" height="560" className="img-fluid" 
                                    src="images/team-member/team-img04.jpg" alt="image"></img>
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            {/* <!-- social-icons --> */}
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><a href="team-details.html">Marry Quinn</a></h3>
                                    </div>
                                    <p className="category">Gardener</p>
                                    {/* <!-- category --> */}
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-team end--> */}
                        </div>
                    </div>
                    {/* <!-- row end--> */}
                    
                </div>
            </section>
        </div>                            

) : (
        <div>
          <br />
          <p>Loading EventDetails Page Please...</p>
        </div>
      )}
    </div>

    );
}
export default EventDetails;


