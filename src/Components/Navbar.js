import {React, useEffect, useState} from 'react';
import AuthService from "../Services/Auth/AuthService";
import { Link } from 'react-router-dom';


function Navbar ({config})
{
    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(user.role =="ADM");
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };
  return(
    <header id="masthead" className="header ttm-header-style-02">
    <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
        <div className="container">
            <div className="ttm-topbar-content">
                <ul className="top-contact text-left">
                    <li className="list-inline-item"><span className="ttm-textcolor-skincolor"><i className="fa fa-user"></i>  24/7 Emergency Services Provide </span> : {config.phone_3}</li>
                </ul>
                <div className="topbar-right text-right">
                    <ul className="top-contact ttm-highlight-right">
                        <li><span className="ttm-textcolor-skincolor">Send Email</span> : {config.email_3}</li>
                    </ul>
                    <div className="ttm-social-links-wrapper list-inline">
                        <ul className="social-icons">
                            <li><a href={config.facebook} rel="noopener" aria-label="facebook"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href={config.twitter} rel="noopener" aria-label="twitter"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href={config.linkedin} rel="noopener" aria-label="twitter"><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li><a href={config.youtube} rel="noopener" aria-label="pinterest-p"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href={config.instagram} rel="noopener" aria-label="pinterest-p"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ttm-header-wrap">
        <div id="ttm-stickable-header-w" className="ttm-stickable-header-w clearfix">
            <div id="site-header-menu" className="site-header-menu">
                <div className="site-header-menu-inner ttm-stickable-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-navigation d-xl-flex flex-row align-items-center justify-content-between">
                                    <div className="site-branding">
                                        <a className="home-link" href="index.html" title="Agrotek" rel="home">
                                            {/* <img width="211" height="54" id="logo-img" className="img-center" 
                                            src="images/logo.png" alt="logo-img"></img> */}
                                        </a>
                                    </div>
                                    <div id="site-navigation" className="site-navigation">
                                        <div className="ttm-header-icons">
                                            <Link to="contact" className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-darkgrey">Get Quoted</Link>
                                        </div>
                                        <div className="ttm-menu-toggle">
                                            <input type="checkbox" id="menu-toggle-form" />
                                            <label htmlFor="menu-toggle-form" className="ttm-menu-toggle-block">
                                                <span className="toggle-block toggle-blocks-1"></span>
                                                <span className="toggle-block toggle-blocks-2"></span>
                                                <span className="toggle-block toggle-blocks-3"></span>
                                            </label>
                                        </div>
                                        <nav id="menu" className="menu">
                                        {currentUser ? (

                                            <ul className="dropdown">
                                               <li className="active"><Link to="/">Home</Link></li>
                                               <li className="active"> <Link to="/events">Attend An Event</Link></li>
                                               <li> <Link to="/about">About</Link></li>
                                               <li><Link to="/contact">Contact</Link></li>
                                               <li><Link to="/gallery">Gallery</Link></li>
                                               <li><Link to="/events">Events</Link></li>
                                               <li><Link to="/addtestimonial">Post Testimonials</Link></li>
                                               <li><Link to="/login">Login</Link></li>
                                               <li><Link to="/register">Signup</Link></li>
                                               <li><Link to="/" onClick={logOut}>LogOut</Link></li>
                                              </ul>
                                         ) : (
                                            <ul className="dropdown">
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li className="active"> <Link to="/events">Attend An Event</Link></li>
                                            <li> <Link to="/about">About</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/events">Events</Link></li>
                                            <li><Link to="/addtestimonial">Post Testimonials</Link></li>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/register">Signup</Link></li>
                                            </ul>

)}                          
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>    
</header>

    );
}

export default Navbar;