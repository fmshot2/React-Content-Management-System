import React,  { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

import apiSource from "../http-common";


import UpcomingDataService from "../Services/UpcomingEventsService";

function UpcomingComponent() {

    const [loading, setLoading] = useState(true);
    const [upcomingevents, setUpcomingEvents] = useState([]);
    const [length, setLength] = useState(false);



    useEffect(() => {
    retrieveUpcoming();
  }, []);

    const retrieveUpcoming = () => {
    UpcomingDataService.getAll()
      .then(response => {
       upcomingevents.length > 0 && setLength(true);
  
       process.env.REACT_APP_API_SOURCE === 'laravel' ?  setUpcomingEvents(response.data) : setUpcomingEvents(response.data.data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };
if (loading) {
        return <h4>Loading UpcomingEvents...</h4>
    }
else

    return (

// <!-- events-section -->
<section className="ttm-row services-section ttm-bgcolor-grey ttm-bg ttm-bgimage-yes bg-img4 clearfix">
    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="container">
        <div className="row">
            {/* <!-- row --> */}

            <div className="col-lg-12 col-xl-12 col-md-9">
                {/* <!-- section-title --> */}
                <div className="section-title style2 clearfix">
                    <div v="title-header">
                        <h3>WORKING WITH EXCELLENT</h3>
                        <h2 className="title">Our UpComing Events</h2>
                    </div>
                    <div className="title-desc">We can say that agriculture is equivalent to farmers, without farmers agriculture is incomplete
                    </div>
                </div>
                {/* <!-- section-title end --> */}
            </div>                   
        </div>
         <p className="text-center text-dark text-small m-5">{length ? 'xcxc' : 'Hold On. No Upcoming Events yet...'}</p> 

        <div className="row">

        {upcomingevents.map((upcomingevent) => (

            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-thumbnail"> 
                        <img width="710" height="535" className="img-fluid" src="images/services/services-1-710x535.jpg" alt="image"/> 
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                             <h3><a href={"/eventdetails/" + upcomingevent.id}>{upcomingevent.title}</a></h3> 
                        </div>
                        <div className="featured-desc">
                            <p>{upcomingevent.details}</p>
                        </div>
                        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-darkgrey" href={"/eventdetails/" + upcomingevent.id}> View More</a>
                    </div>
                
                </div>
            </div>
        ))}
            </div>
            </div>
</section>


);
}

export default UpcomingComponent