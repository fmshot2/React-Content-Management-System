import React,  { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';


import PreviousDataService from "../Services/PreviousEventsService";

function PreviousComponent() {

    const [loading, setLoading] = useState(true);
    const [previousevents, setPreviousEvents] = useState([]);

    

    useEffect(() => {
    retrievePrevious();
  }, []);

    const retrievePrevious = () => {
    PreviousDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setPreviousEvents(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
if (loading) {
        return <h4>Loading PreviousEvents...</h4>
    }
else

    return (
    <div>
            <div className="ttm-row zero-padding-section clearfix">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- ttm-col-bgcolor-yes --> */}
                            <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-left-span spacing-1 z-0">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                    <div className="ttm-bg-layer-inner"></div>
                                </div>
                                <div className="layer-content">
                                    <div className="row">
                                        {/* <!-- row --> */}
                                        <div className="col-lg-12 col-xl-12 col-md-9">
                                            {/* <!-- section-title --> */}
                                            <div className="section-title style3 clearfix">
                                                <div className="title-header">
                                                    <h3>WHY CHOOSE US</h3>
                                                    <h2 className="title">Our PREVIOUS EVENTS</h2>
                                                </div>
                                                <div className="title-desc">Farmers are the backbone of the agricultural industry. We Support farming & save nature. We don’t have another place.</div>
                                            </div>
                                            {/* <!-- section-title end --> */}
                                        </div>                   
                                    </div>
                                    {/* <!-- ttm-client --> */}

                                    <div className="row">
                                    {previousevents.map((previousevent) => (

                                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                            <div className="featured-imagebox featured-imagebox-services style3">
                                                <div className="featured-thumbnail"> 
                                                    <img width="900" height="730" className="img-fluid" 
                                                    src="images/services/services-1-900x730.jpg" alt="image"></img> 
                                                </div>
                                            </div>
                                            <div className="featured-imagebox featured-imagebox-services style3">
                                                <div className="featured-content">
                                                    <div className="featured-desc">
                                                        <p>{previousevent.title}</p>
                                                    </div>
                                                    <div className="featured-title">
                                                        <h3><a href="services-01.html" tabindex="0">{previousevent.date}</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))} 
                                    </div>
                                    {/* <!-- ttm-client end --> */}
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        );
    }
    
 export default PreviousComponent