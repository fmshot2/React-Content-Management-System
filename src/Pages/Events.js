import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import PreviousEventService from "../Services/PreviousEventsService";
import UpcomingEventService from "../Services/UpcomingEventsService";




function Events() {
    const [loading, setLoading] = useState(true);
    const [previousevents, setPreviousEvents] = useState([]);
    const [upcomingevents, setUpcomingEvents] = useState([]);
    const [length, setLength] = useState(false)

    useEffect(() => {
        retrieveUpcomingEvent();
        retrievePreviousEvent();
        // filterEvent();
    }, []);

    const retrieveUpcomingEvent = () => {
        UpcomingEventService.getAll()
      .then(response => {
       console.log("events in model", response);
        // var date = new Date(Date.parse(DATE));
        response.data.length > 0 && setLength(true);
        setUpcomingEvents(response.data) 
        // setEvents
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrievePreviousEvent = () => {
    PreviousEventService.getAll()
      .then(response => {
       console.log("PreviousEventDataService", response);
        // var date = new Date(Date.parse(DATE));
        // response.data.length > 0 && setLength(true);
        setPreviousEvents(response.data) 
        // setEvents
        setLoading(false);
        // console.log("events2", events);
      })
      .catch(e => {
        console.log(e);
      });
  };

if (loading) {
        return <h4>Loading Events...</h4>
    }
else
    return (
        // <!--site-main start-->
        <div class="site-main">
            {/* <!-- blog-section --> */}
            <section className="ttm-row grid-section clearfix">
                <div className="container">
                    {/* <!-- row --> */}
                    <h2 className="text-center">UPCOMING EVENTS</h2>
                    <p className="text-center text-small m-5">{length ? '' : 'Hold On. No Upcoming Events yet...'}</p>
                    <div className="row">
                        {upcomingevents.map((upcomingevent) => (

                        <div className="col-md-6 col-lg-3 col-sm-6">
                            {/* <!-- featured-imagebox-blog --> */}
                            <div className="featured-imagebox featured-imagebox-blog style1 box-shadow mb-20">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="672" height="580" class="img-fluid" src="images/blog/09.jpg" alt=""/>
                                    <div className="blog-icon">
                                        <i className="ti ti-pencil"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    {/* <!-- featured-content --> */}
                                    <div className="post-meta">
                                        {/* <!-- post-meta --> */}
                                        <span className="ttm-meta-line"><i className="fa fa-calendar"></i>{upcomingevent.date}</span>
                                        <span className="ttm-meta-line"><i className="fa fa-comments"></i>2,comments</span>
                                    </div>
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><Link to={"/eventdetails/" + upcomingevent.id}>{upcomingevent.title}</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-blog end --> */}
                        </div>
                        ))}
                    </div>
                        <h2 className="text-center">PREVIOUS EVENTS</h2>
                    <div className="row">
                    {previousevents.map((previousevent) => (

                        <div className="col-md-6 col-lg-3 col-sm-6">
                            {/* <!-- featured-imagebox-blog --> */}
                            <div className="featured-imagebox featured-imagebox-blog style1 box-shadow mb-20">
                                <div className="featured-thumbnail">
                                    {/* <!-- featured-thumbnail --> */}
                                    <img width="672" height="580" class="img-fluid" src="images/blog/09.jpg" alt=""/>
                                    <div className="blog-icon">
                                        <i className="ti ti-pencil"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    {/* <!-- featured-content --> */}
                                    <div className="post-meta">
                                        {/* <!-- post-meta --> */}
                                        <span className="ttm-meta-line"><i className="fa fa-calendar"></i>{previousevent.date}</span>
                                        <span className="ttm-meta-line"><i className="fa fa-comments"></i>2,comments</span>
                                    </div>
                                    <div className="featured-title">
                                        {/* <!-- featured-title --> */}
                                        <h3><Link to={"/eventdetails/" + previousevent.id}>{previousevent.title}</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- featured-imagebox-blog end --> */}
                        </div>
                        ))}
                        </div>
                        
                    {/* <!-- row --> */}
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="ttm-pagination mb-30">
                                <span className="page-numbers current">1</span>
                                <a className="page-numbers" href="#">2</a>
                                <a className="next page-numbers" href="#"><i className="ti ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
            </section>
            {/* <!-- blog-section --> */}
             
        </div>      

    )
}
export default Events;
