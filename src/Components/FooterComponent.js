
import React from 'react';


const FooterComponent = ({config}) => {
    const MAX_LENGTH = 135;
    return ( 

        <footer className="footer widget-footer ttm-bgcolor-darkgrey clearfix">
            <div className="container">
                <div className="second-footer ttm-textcolor-white">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget widget_text  clearfix">
                                <div className="footer-logo">
                                    <img width="210" height="54" className="img-center" src="images/footer-logo.png" alt="footer-logo"></img>
                                    <div>
                                        {config.details.length > MAX_LENGTH ?
                                            (
                                                <p>
                                                    {`${config.details.substring(0, MAX_LENGTH)}...`}
                                                </p>
                                            ) :
                                            <p>{config.details}</p>
                                        }
                                    </div>

                                {/* <p>{config.details}</p> */}
                                </div>
                                <div className="ttm-horizontal_sep mt-25 mb-20"></div>
                                <div className="ttm-social-share-wrapper">
                                    <h3 className="social-share-text">Social Share : </h3>
                                    <div className="social-icons">
                                        <ul className="m-0">
                                            <li className="social-facebook"><a href={config.facebook} rel="noopener" aria-label="facebook"><i class="ti ti-facebook"></i></a></li> 
                                            <li className="social-twitter"><a href={config.twitter} rel="noopener" aria-label="twitter"><i class="ti ti-twitter-alt"></i></a></li>
                                            <li className="social-linkedin"><a href={config.linkedin} rel="noopener" aria-label="linkedin"><i class="ti ti-linkedin"></i></a></li>
                                            <li className="social-pinterest"><a href={config.youtube} rel="noopener" aria-label="pinterest"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                            <li className="social-pinterest2"><a href={config.instagram} rel="noopener" aria-label="pinterest"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget link-widget clearfix">
                               <h3 class="widget-title">Useful Links</h3>
                                <ul id="menu-footer-services">
                                    <li><a href="aboutus-01.html">About Us</a></li>
                                    <li><a href="services-01.html">Our Services</a></li>
                                    <li><a href="aboutus-02.html">Nomadic Herding</a></li>
                                    <li><a href="services-02.html">Veterinary Services</a></li>
                                    <li><a href="contact.html">Commercial Plant</a></li>
                                    <li><a href="services-01.html">Farm Labor Management</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget widget_text clearfix">
                                <h3 className="widget-title">Recent News</h3>
                                <ul className="widget-post ttm-recent-post-list">
                                    <li>
                                        <a href="single-blog.html">
                                            <img width="70" height="70" src="images/blog/01.jpg" alt="post-img"></img>
                                        </a>
                                        <div className="post-detail">
                                            <span className="post-date"><i className="fa fa-calendar"></i>23 June 2021</span>
                                            <a href="single-blog.html">Outdoor Vintage Flower Garden Decor</a>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="single-blog.html"><img width="70" height="70" src="images/blog/02.jpg" alt="post-img"></img></a>
                                        <div className="post-detail">
                                            <span class="post-date"><i className="fa fa-calendar"></i>23 June 2021</span>
                                            <a href="single-blog.html">Outdoor Vintage Flower Backyard pantation</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget contact-widget">
                                <h3 className="widget-title">Get in touch</h3> 
                                <div className="featured-icon-box left-icon icon-align-top style13">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-xs ttm-icon_element-style-round">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>{config.phone_1}</p>
                                            <p>{config.phone_2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box left-icon icon-align-top style13">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-xs ttm-icon_element-style-round">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>{config.address}</p>
                                            <p>{config.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box left-icon icon-align-top style13">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-xs ttm-icon_element-style-round">
                                            <i className="fa fa-envelope-o"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>{config.email_1}</p>
                                            <p>{config.email_2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first-footer">
                    <div className="container">  
                        <div className="row footer-box">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 widget-area">
                                <div className="featured-icon-box left-icon icon-align-top style15">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-color-skincolor">
                                            <i className="ti ti-email ttm-textcolor-skincolor"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Subscribe Our Newsletter</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Stay in touch with us to get latest news.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 widget-area">
                                <form id="subscribe-form" className="newsletter-form" method="post" action="#" data-mailchimp="true">
                                    <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                                        <p><input type="email" name="email" placeholder="Enter Your Email Address...." required=""/></p>
                                        <p><button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Subscribe Now<i class="fa fa-long-arrow-right"></i></button></p>
                                    </div>
                                    <div id="subscribe-msg"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer-text ttm-textcolor-white">
                    <div className="container">
                        <div className="row copyright">
                            <div className="col-md-12">
                                <span>Copyright © 2019 Agrotek Template by <a href="https://themetechmount.com/">ThemetechMount</a></span>
                            </div>
                            <div className="col-md-12">
                                <ul id="menu-footer-menu" className="footer-nav-menu">
                                    <li><a href="about">About Us</a></li>
                                    <li><a href="services">Services</a></li>
                                    <li><a href="contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


 );
    }
    
    export default FooterComponent 