   import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import AboutDataService from "../Services/AboutService";

function About() {
    const initialAboutState = {
    id: null,
    title: "",
    details: "",
  };

    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(initialAboutState);

    

    useEffect(() => {
    retrieveAbout();
  }, []);

    const retrieveAbout = () => {
    AboutDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setAbout(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


if (loading) {
        return <h4>Loading AboutPage...</h4>
    }
else
    return (
        
        <div className="site-main">

            {/* <!-- aboutus-section --> */}
            <section className="ttm-row second-about-section bg-img1 position-relative clearfix">
                <div className="container">
                 {about ? (
                    <div className="row">
                        {/* <!-- row --> */}
                        <div className="col-lg-6">
                            {/* <!-- ttm_single_image-wrapper --> */}
                            <div className="ttm_single_image-wrapper after-border style2 position-relative ml-20">
                                <img width="522" height="479" class="img-fluid border-12px-solid white-border border-radius-6" src="images/single-img-five.jpg" alt="single-img-five"></img>
                            </div>
                            {/* <!-- ttm_single_image-wrapper end --> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="res-991-mt-50">
                                {/* <!-- section title --> */}
                                <div className="section-title clearfix">
                                    <div className="title-header">
                       
                                        {/*<h3>{about.title}<span></span></h3> */}
                                        <h2 className="title">{about.title}</h2>
                                    </div>
                                </div>
                                {/* <!-- section title end --> */}
                                <p>{about.details}</p>
                                <div className="col-lg-12">
                                    <div className="row ttm-bgcolor-white align-items-center border-radius-6 mt-30">
                                        <div className="col-md-4 col-lg-4">
                                            {/* <!--ttm-fid--> */}
                                            <div className="ttm-fid inside without-icon style1">
                                                <div className="ttm-fid-contents text-center">
                                                    {/* <!--ttm-fid-contents--> */}
                                                    <h4 className="ttm-fid-inner">
                                                        <span   data-appear-animation = "animateDigits"
                                                        data-from             = "0"
                                                        data-to               = "35"
                                                        data-interval         = "2"
                                                        data-before           = ""
                                                        data-before-style     = "sup"
                                                        data-after            = "+"
                                                        data-after-style      = "sub"
                                                    >35</span><span className="ml-5">+</span>
                                                    </h4>
                                                    <h3 className="ttm-fid-title">Our Team</h3>
                                                    {/* <!--ttm-fid-title--> */}
                                                </div>
                                            </div>
                                            {/* <!-- ttm-fid end--> */}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            {/* <!--ttm-fid--> */}
                                            <div className="ttm-fid inside  without-icon style1">
                                                <div className="ttm-fid-contents text-center">
                                                    {/* <!--ttm-fid-contents--> */}
                                                    <h4 className="ttm-fid-inner">
                                                        <span   data-appear-animation = "animateDigits"
                                                        data-from             = "0"
                                                        data-to               = "75"
                                                        data-interval         = "2"
                                                        data-before           = ""
                                                        data-before-style     = "sup"
                                                        data-after            = "+"
                                                        data-after-style      = "sub"
                                                    >75</span><span class="ml-5">+</span>
                                                    </h4>
                                                    <h3 className="ttm-fid-title">Our Shop</h3>
                                                    {/* <!--ttm-fid-title--> */}
                                                </div>
                                            </div>
                                            {/* <!-- ttm-fid end--> */}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            {/* <!--ttm-fid--> */}
                                            <div className="ttm-fid inside without-icon style1">
                                                <div className="ttm-fid-contents text-center">
                                                    {/* <!--ttm-fid-contents--> */}
                                                    <h4 className="ttm-fid-inner">
                                                        <span   data-appear-animation = "animateDigits"
                                                        data-from             = "0"
                                                        data-to               = "150"
                                                        data-interval         = "2"
                                                        data-before           = ""
                                                        data-before-style     = "sup"
                                                        data-after            = "+"
                                                        data-after-style      = "sub"
                                                    >150</span><span className="ml-5">+</span>
                                                    </h4>
                                                    <h3 className="ttm-fid-title">Our Brand</h3>
                                                    {/* <!--ttm-fid-title--> */}
                                                </div>
                                            </div>
                                            {/* <!-- ttm-fid end--> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row mt-30">
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <div className="text-left pt-15">
                                                <img src="images/about-sign.png" alt="about-sign"></img>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-8 col-sm-8">
                                            {/* <!--  featured-icon-box -->  */}
                                            <div className="featured-icon-box without-icon style1 text-left pt-15">
                                                <div className="featured-content">
                                                    {/* <!--  featured-content --> */}
                                                    <div className="featured-desc">
                                                        {/* <!--  featured-desc --> */}
                                                        <p>Call to ask any question</p>
                                                    </div>
                                                    <div className="featured-title">
                                                        {/* <!--  featured-title --> */}
                                                        <h3>+0123-456-7890</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--  featured-icon-box END --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   ) : (
        <div>
          <br />
          <p>Loading About Content...</p>
        </div>
      )}
                </div>
            </section>
            {/* <!-- aboutus-section end --> */}

            {/* <!-- only-text-section --> */}
            <section class="ttm-row only-text-section ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img10 clearfix">
                <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-md-flex justify-content-md-between align-items-md-center">
                                {/* <!--  featured-icon-box -->  */}
                                <div class="featured-icon-box left-icon icon-align-top">
                                    <div class="featured-icon">
                                        {/* <!--  featured-icon -->  */}
                                        <div class="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                                            <i class="flaticon flaticon-agriculture"></i>
                                            {/* <!--  ttm-icon -->  */}
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        {/* <!--  featured-content --> */}
                                        <div class="featured-desc">
                                            {/* <!--  featured-desc --> */}
                                            <p>AGROTEK SPECIAL OFFERS</p>
                                        </div>
                                        <div class="featured-title">
                                            {/* <!--  featured-title --> */}
                                            <h3 class="fs-30">Get A Free Agriculture Services</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--  featured-icon-box END --> */}
                                <div className="res-767-mt-20">
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-white" href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- only-text-section --> */}

            {/* <!-- fid-section --> */}
            <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
                <div className="container">
                    <div className="row ttm-bgcolor-grey border-12px-solid white-border mt_80 no-gutters border-radius-6">
                        {/* <!-- row --> */}
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-left">
                                    {/* <!--ttm-fid-left--> */}
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-farmer"></i>
                                    </div>
                                </div>
                                <div className="ttm-fid-contents text-left">
                                    {/* <!--ttm-fid-contents--> */}
                                    <h4 className="ttm-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "478"
                                        data-interval         = "5"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = ""
                                        data-after-style      = "sub"
                                    >478</span>
                                    </h4>
                                    <h3 className="ttm-fid-title">Happy Customers</h3>
                                    {/* <!--ttm-fid-title--> */}
                                </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-left">
                                    {/* <!--ttm-fid-left--> */}
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-mill"></i>
                                    </div>
                                </div>
                                <div className="ttm-fid-contents text-left">
                                    {/* <!--ttm-fid-contents--> */}
                                    <h4 className="ttm-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "1432"
                                        data-interval         = "10"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = ""
                                        data-after-style      = "sub"
                                    >1432</span>
                                    </h4>
                                    <h3 className="ttm-fid-title">Projects Done</h3>
                                    {/* <!--ttm-fid-title--> */}
                                </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-left">
                                    {/* <!--ttm-fid-left--> */}
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-agriculture-5"></i>
                                    </div>
                                </div>
                                <div className="ttm-fid-contents text-left">
                                    {/* <!--ttm-fid-contents--> */}
                                    <h4 className="ttm-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "785"
                                        data-interval         = "5"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = ""
                                        data-after-style      = "sub"
                                    >785</span>
                                    </h4>
                                    <h3 className="ttm-fid-title">Technology Types</h3>
                                    {/* <!--ttm-fid-title--> */}
                                </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-left">
                                    {/* <!--ttm-fid-left--> */}
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-agronomy"></i>
                                    </div>
                                </div>
                                <div className="ttm-fid-contents text-left">
                                    {/* <!--ttm-fid-contents--> */}
                                    <h4 className="ttm-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "547"
                                        data-interval         = "5"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = ""
                                        data-after-style      = "sub"
                                    >547</span>
                                    </h4>
                                    <h3 className="ttm-fid-title">Awards & Features</h3>
                                    {/* <!--ttm-fid-title--> */}
                                </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
            </section>
            {/* <!-- fid-section --> */}


        </div>



    );
}
export default About;