import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

function Contact({config}) {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(() => {

        

    }, []);
    
    return (
        // <!--site-main start-->
        <div className="site-main">

            {/* <!-- contactbox-section --> */}
            <section className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
                <div className="container">
                    <div className="row">
                        {/* <!-- row --> */}
                        <div className="col-lg-4">
                            {/* <!--  featured-icon-box -->  */}
                            <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div className="featured-icon">
                                    {/* <!--  featured-icon -->  */}
                                    <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i className="flaticon flaticon-phone-call"></i>
                                        {/* <!--  ttm-icon -->  */}
                                    </div>
                                </div>
                                <div className="featured-content">
                                    {/* <!--  featured-content --> */}
                                    <div className="featured-title">
                                        {/* <!--  featured-title --> */}
                                        <h3>Phone<span></span></h3>
                                    </div>
                                    <div className="featured-desc">
                                        {/* <!--  featured-desc --> */}
                                        <p>{config.phone_1 ? config.phone_1 : ""}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  featured-icon-box END --> */}
                        </div>
                        <div className="col-lg-4">
                            {/* <!--  featured-icon-box -->  */}
                            <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div className="featured-icon">
                                    {/* <!--  featured-icon -->  */}
                                    <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i className="flaticon flaticon-envelope"></i>
                                        {/* <!--  ttm-icon -->  */}
                                    </div>
                                </div>
                                <div className="featured-content">
                                    {/* <!--  featured-content --> */}
                                    <div className="featured-title">
                                        {/* <!--  featured-title --> */}
                                        <h3>{config.email_1}</h3>
                                    </div>
                                    <div className="featured-desc">
                                        {/* <!--  featured-desc --> */}
                                        <p>{config.email_2}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  featured-icon-box END --> */}
                        </div>
                        <div className="col-lg-4">
                            
                            {/* <!--  featured-icon-box -->  */}
                            <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div className="featured-icon">
                                    {/* <!--  featured-icon -->  */}
                                    <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i className="flaticon flaticon-placeholder"></i>
                                        {/* <!--  ttm-icon -->  */}
                                    </div>
                                </div>
                                <div className="featured-content">
                                    {/* <!--  featured-content --> */}
                                    <div className="featured-title">
                                        {/* <!--  featured-title --> */}
                                        <h3>Address</h3>
                                    </div>
                                    <div className="featured-desc">
                                        {/* <!--  featured-desc --> */}
                                        <p>{config.address}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  featured-icon-box END --> */}
                        </div>
                    </div>
                    {/* <!-- row end --> */}
                </div>
            </section>
            {/* <!-- contactbox-section end --> */}
            {/* <!-- contactbox-section --> */}
            <section className="ttm-row contact-form-section clearfix">
                <div className="container">
                    <div className="row">
                        {/* <!-- row --> */}
                        <div className="col-lg-6">
                            {/* <!-- section title --> */}
                            <div className="section-title clearfix">
                                <div className="title-header">
                                    <h2 className="title">Contact Us</h2>
                                </div>
                            </div>
                            {/* <!-- section title end --> */}
                            <p>Our Team is happy to answer your Questions. Fill out the form, and we’ll be in touch as soon as Possible.</p>
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <!--  featured-icon-box -->  */}
                                    <div className="featured-icon-box left-icon style9 ttm-bgcolor-white mb-30">
                                        <div className="featured-icon">
                                            {/* <!--  featured-icon -->  */}
                                            <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i className="flaticon flaticon-agriculture"></i>
                                                {/* <!--  ttm-icon -->  */}
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            {/* <!--  featured-content --> */}
                                            <div className="featured-title">
                                                {/* <!--  featured-title --> */}
                                                <h3 className="mb-5">Crop Protection Service</h3>
                                            </div>
                                            <div className="featured-desc">
                                                {/* <!--  featured-desc --> */}
                                                <p>Lorem Ipsum is simply dummy text of the printing ndustry.</p>
                                            </div>
                                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                    {/* <!--  featured-icon-box END --> */}
                                </div>
                                <div className="col-md-12">
                                    {/* <!--  featured-icon-box -->  */}
                                    <div className="featured-icon-box left-icon style9 ttm-bgcolor-white">
                                        <div className="featured-icon">
                                            {/* <!--  featured-icon -->  */}
                                            <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i className="flaticon flaticon-farmer"></i>
                                                {/* <!--  ttm-icon -->  */}
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            {/* <!--  featured-content --> */}
                                            <div className="featured-title">
                                                {/* <!--  featured-title --> */}
                                                <h3 className="mb-5">Technical and Account Support</h3>
                                            </div>
                                            <div className="featured-desc">
                                                {/* <!--  featured-desc --> */}
                                                <p>We are here to help! If you have technical issues, Contact Us. We will serve you the best support.</p>
                                            </div>
                                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                    {/* <!--  featured-icon-box END --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="spacing-6 ttm-bgcolor-grey mt-0 mb-0">
                                <form id="ttm-quote-form" class="row ttm-quote-form clearfix" method="post" action="#">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input className="name" type="text" className="form-control with-border bg-white" placeholder="Full Name*" required="required"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="form-group">
                                            <input name="phone" type="text" placeholder="Phone Number*" required="required" class="form-control with-border bg-white"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="address" type="text" placeholder="Email Address*" required="required" class="form-control with-border bg-white"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="subject" type="text" placeholder="Subject" required="required" class="form-control with-border bg-white"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select className="form-control with-border bg-white">
                                                <option>Services</option>
                                                <option>Services 01</option>
                                                <option>Services 02</option>
                                                <option>Services 03</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="Massage" rows="4" placeholder="Write A Massage..." required="required" class="form-control with-border bg-white"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="text-left">
                                            <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey w-100" value="">
                                                Submit Quote
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row end --> */}
                </div>
            </section>
            {/* <!-- contactbox-section end --> */}
            {/* <!-- map-section --> */}
            <div className="ttm-row zero-padding-section clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!--map-start--> */}
                            <div className="map-wrapper">
                                <div id="map_canvas"></div>
                            </div>
                            {/* <!--map-end--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- map-section end --> */}

        </div>      


    );
}
export default Contact;








