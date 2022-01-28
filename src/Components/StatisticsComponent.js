import React,  { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';


import StatisticsDataService from "../Services/StatisticsService";

function StatisticsComponent() {

    const [loading, setLoading] = useState(true);
    const [statistics, setStatistics] = useState([]);

    

    useEffect(() => {
    retrieveStatistics();
  }, []);

    const retrieveStatistics = () => {
    StatisticsDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setStatistics(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
if (loading) {
        return <h4>Loading Statistics...</h4>
    }
else

       return (   
            <div>
            <section className="ttm-row only-text-section ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img10 clearfix">
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-md-flex justify-content-md-between align-items-md-center">
                              
                                <div className="featured-icon-box left-icon icon-align-top">
                                    <div className="featured-icon"> 
                                        <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-agriculture"></i> 
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div class="featured-desc">
                                            <p>AGROTEK SPECIAL OFFERS</p>
                                        </div>
                                        <div className="featured-title">
                                            <h3 className="fs-30">Get A Free Agriculture Services</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="res-767-mt-20">
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-white" href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
                <div className="container">
                    <div className="row ttm-bgcolor-grey border-12px-solid white-border mt_80 no-gutters border-radius-6">
                        {statistics.map((statistic) => (
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-left">
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-farmer"></i>
                                    </div>
                                </div>
                                <div className="ttm-fid-contents text-left">
                                    <h4 className="ttm-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "478"
                                        data-interval         = "5"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = ""
                                        data-after-style      = "sub"
                                    >{statistic.value}</span>
                                    </h4>
                                    <h3 className="ttm-fid-title">{statistic.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
            
            
  );
}

export default StatisticsComponent

