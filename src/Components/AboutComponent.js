import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import AboutDataService from "../Services/AboutService";


    

function AboutComponent() {

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
       console.log("istabout", response);
        setAbout(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


if (loading) {
        return <h4>Loading About...</h4>
    }
else
    return (
        <section className="ttm-row about-section position-relative clearfix">
        <div className="container">
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-lg-6">
                    {/* <!-- ttm_single_image-wrapper --> */}
                    <div className="ttm_single_image-wrapper border p-15">
                        <img width="571" height="573" className="img-fluid" src="images/single-img-two.png" 
                        alt="single-img-two"></img>
                    </div>
                    {/* <!-- ttm_single_image-wrapper end --> */}
                </div>
                <div className="col-lg-6">
                    <div className="res-991-mt-50 mt-20 ml-30 res-991-ml-0">
                        {/* <!-- section title --> */}
                        <div className="section-title clearfix">
                            <div className="title-header">
                                <h3>About Us</h3>
                                <h2 className="title">{about.title}</h2>
                            </div>
                        </div>
                        {/* <!-- section title end --> */}
                        <p>{about.details}</p>
                        
                        <div className="row mt-30 res-991-mt-20">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <!--  featured-imagebox -->  */}
                                <div className="featured-imagebox featured-imagebox-services style4">
                                    <div className="featured-thumbnail"> 
                                        <img width="50" height="50" className="img-fluid" src="images/01.svg" 
                                        alt="image"></img> 
                                    </div>
                                    <div className="featured-content">
                                        {/* <!--  featured-content --> */}
                                        <div className="featured-title">
                                            <h3>Tea Farming in Malaw.</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--  featured-icon-box END --> */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <!--  featured-icon-box -->  */}
                                <div className="featured-imagebox featured-imagebox-services style4">
                                    <div className="featured-thumbnail"> 
                                        <img width="50" height="50" className="img-fluid" src="images/02.svg" 
                                        alt="image"></img>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!--  featured-content --> */}
                                        <div className="featured-title">
                                            <h3>Forest & Tree Planting</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--  featured-icon-box END --> */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <!--  featured-icon-box -->  */}
                                <div className="featured-imagebox featured-imagebox-services style4">
                                    <div className="featured-thumbnail"> 
                                        <img width="50" height="50" className="img-fluid" src="images/03.svg" 
                                        alt="image"></img>
                                    </div>
                                    <div className="featured-content">
                                        {/* <!--  featured-content --> */}
                                        <div className="featured-title">
                                            <h3>Forest & Tree Planting</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--  featured-icon-box END --> */}
                            </div>
                        </div>
                        <div className="mt-50 res-991-mt-20">
                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                            ttm-icon-btn-right ttm-btn-color-skincolor z-0" href="/ about">More About</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    );
}

export default AboutComponent