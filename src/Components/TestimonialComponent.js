 import React, { useState, useEffect } from 'react';
import TestimonialDataService from "../Services/TestimonialService";

function TestimonialComponent() {
    const [loading, setLoading] = useState(true);
    const [testimonials, setTestimonials] = useState([]);



    useEffect(() => {
        retrieveTestimonial();
    }, []);

    const retrieveTestimonial = () => {
        TestimonialDataService.getAll()
            .then(response => {
                console.log("testimonies1", response);
                setTestimonials(response.data.slice(-3));
                // const lastTwo = cars.slice(-2);


                setLoading(false);
                console.log("testimonies2", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const MAX_LENGTH = 120;
if (loading) {
        return <h4>Loading Testimonials...</h4>
    }
else

    return (


        // <!--testimonial-section-->
        <section className="ttm-row testimonial-section clearfix">
            <div className="container">
                <div className="row">
                    {/* <!-- row --> */}
                    <div className="col-lg-12">
                        {/* <!-- section title --> */}
                        <div className="section-title text-center clearfix">
                            <div className="title-header">
                                <h3>TESTIMONIALS<span></span></h3>
                                <h2 className="title">What Our Clients Saying?</h2>
                            </div>
                        </div>
                        {/* <!-- section title end --> */}
                    </div>
                </div>
                {/* <!--row--> */}
                <div className="row">
                    {/* <!--testimonials--> */}
                    {testimonials.map((testimony) => (
                        <div className="col-12 col-md-4">
                            <div className="testimonials style1">
                                <div className="testimonial-avatar">
                                    <div className="testimonial-img">
                                        <img width="150" height="150" className="img-center" src="images/testimonial/01.jpg" alt="testimonial-img"></img>
                                    </div>
                                </div>

                                <div className="testimonial-content">
                                    <div className="testimonial-caption">
                                        <h3>{testimony.name}</h3>
                                    </div>
                                    <div>
                                        {testimony.details.length > MAX_LENGTH ?
                                            (
                                                <div>
                                                    {`${testimony.details.substring(0, MAX_LENGTH)}...`}
                                                </div>
                                            ) :
                                            <p>{testimony.details}</p>
                                        }
                                    </div>
                                    <div className="testimonial-caption mt-4">
                                        <h6>{testimony.profession.length > 10 ? `${testimony.profession.substring(0, 10)}...` : testimony.profession}</h6>
                                    </div>
                                    {/* <blockquote>{testimony.details}</blockquote> */}

                                </div>
                            </div>
                            {/* <!--testimonials end--> */}
                        </div>
                    ))}

                    {/* <!--testimonials end--> */}
                </div>
                {/* <!--row end--> */}
            </div>

        </section>
        

    );
}

export default TestimonialComponent 