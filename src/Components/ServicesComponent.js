import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import ServiceDataService from "../Services/ServicesCompService";

function ServicesComponent() {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    

    useEffect(() => {
    retrieveService();
  }, []);

    const retrieveService = () => {
    ServiceDataService.getAll()
      .then(response => {
    //    console.log("tutossssr", response);
        setServices(response.data);

        setLoading(false);
        // console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
if (loading) {
        return <h4>Loading Services...</h4>
    }
else

    return (
    <div className="site-main">

    {/* <!-- services-section --> */}
    <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
        <div className="container">
            {/* <!-- row --> */}
            <div className="row mt_105 res-991-mt-40">
            {services.map((service) => (
                <div className="col-lg-3 col-sm-6 col-md-6 h-300">
                    {/* <!--  featured-icon-box -->  */}
                    <div className="featured-icon-box top-icon style1">
                        <div className="featured-icon">
                            {/* <!--  featured-icon --> */}
                            <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-lg ttm-icon_element-style-round">
                                <i className="flaticon flaticon-gmo-1"></i>
                            </div>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h3><a href="services-01.html">{service.title}</a></h3>
                            </div>
                            <div className="featured-desc">
                                <p>{service.details}</p>
                            </div>
                            <div className="featured-button">
                                <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-white" href="services-01.html">View More</a>
                            </div>
                        </div>
                    </div>
                
                </div>
                ))}
            </div>
            {/* <!-- row end --> */}
        </div>
    </section>
    </div>
    );
}

export default ServicesComponent