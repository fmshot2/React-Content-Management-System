import React, { useState } from "react";
// import Button from '../ReUsables/Button'
import TestimonialDataService from "../Services/TestimonialService";
import {Link, } from 'react-router-dom';


const AddTestimonials = () => {
  const initialTestimonialState = {
    id: null,
    name: "",
    details: "",
    rating: "",
    profession: "",


    // published: false
  };
  const [testimonials, setTestimonials] = useState(initialTestimonialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTestimonials({ ...testimonials, [name]: value });
  };

  const saveTestimonial = () => {
    var data = {
      name: testimonials.name,
      details: testimonials.details,
      rating: testimonials.rating,
      profession: testimonials.profession,


    };

    TestimonialDataService.create(data)
      .then(response => {
        setTestimonials({
          id: response.data.id,
          name: response.data.name,
          details: response.data.details,
          rating: response.data.rating,
          profession: response.data.profession,


        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTestimonial = () => {
    setTestimonials(initialTestimonialState);
    setSubmitted(false);
  };

   return (
    <div className="submit-form">
      {submitted ? (
        <div className="d-flex justify-content-between">
        <div>
          <h4>You submitted successfully!</h4>
          {/* <Button 
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Add Testimonial"
                onClick={newTestimonial} /> */}
        </div>
                <Link to={'/testimonials'} className="btn btn-warning btn-sm float-end"> Testimonials</Link>
</div>
      ) : (
<div>
          {/* Button trigger modal  */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  post Testimonies
</button>

  {/* Modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={testimonials.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Details</label>
            <input
              type="text"
              className="form-control"
              id="details"
              required
              value={testimonials.details}
              onChange={handleInputChange}
              name="details"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Rating</label>
            <input
              type="string"
              className="form-control"
              id="rating"
              required
              value={testimonials.rating}
              onChange={handleInputChange}
              name="rating"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Profession</label>
            <input
              type="text"
              className="form-control"
              id="profession"
              required
              value={testimonials.profession}
              onChange={handleInputChange}
              name="profession"
            />
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={saveTestimonial}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
       {/* <div className="d-flex justify-content-between"> 
           <Button 
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Submit"
               onClick={saveTestimonial} />
             <Link to={'/testimonials'} className="btn btn-warning btn-sm float-end"> Testimonials</Link>
 </div> */}
        </div>
      )}
    </div>
  );
};

export default AddTestimonials
  