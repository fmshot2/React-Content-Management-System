import React, { useState, useEffect } from "react";
import Button from '../Reusables/Button'
import swal from 'sweetalert';
import {Link,useNavigate } from 'react-router-dom';
import AuthService from "../Services/Auth/AuthService";

function AttendEventComponent() {
  let navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      swal("Hello!", "...Please Log In to Attend This Event!");
      navigate("/login");
    } else {
         return
    }

}, []);

return (
  <div className="">hghjgjhg</div>
)
};

export default AttendEventComponent