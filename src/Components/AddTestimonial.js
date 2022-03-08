import React, { useState, useEffect } from "react";
import Button from '../Reusables/Button'
import TestimonialDataService from "../Services/TestimonialService";
import {Link,useNavigate } from 'react-router-dom';
import AuthService from "../Services/Auth/AuthService";



const AddTestimonials = () => {
  let navigate = useNavigate();
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

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      navigate("/login");
    } else {
         return
    }

}, []);

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
        getSubmitted();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  function getSubmitted() {
    setTimeout(function(){
    setSubmitted(false);
}, 7000)
    // return setSubmitted(true);
  }

   return (
    <div className="submit-form">
      {submitted && (
          <p id="hhh">You submitted successfully!</p>
      )}

         {/* Button trigger modal  */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  post Testimonies
</button>

  {/* Modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
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
            <textarea
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

      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={saveTestimonial} data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default AddTestimonials
  