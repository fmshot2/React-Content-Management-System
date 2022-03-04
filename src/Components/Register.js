import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

function RegisterComponent() {
<div>
<div>
  <p>Login to Register for This Event</p>
<form>
  <div class="form-group">
    <label> for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


{/* Button trigger modal  */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  <p>if not registred? <span>Register!</span></p>
</button>
</div>
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
             />
          </div>

          <div className="form-group">
            <label htmlFor="description">Details</label>
            <textarea
              type="text"
              className="form-control"
              id="details"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Rating</label>
            <input
              type="string"
              className="form-control"
              id="rating"
              required
            
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Profession</label>
            <input
              type="text"
              className="form-control"
              id="profession"
              required
            />
          </div>

      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div> 
</div>
</div>     

};

export default RegisterComponent