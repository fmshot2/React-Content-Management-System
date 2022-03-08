import React, {useState, useEffect} from 'react';
import {Link, } from 'react-router-dom';
import Slider from '../Components/Slider';
import ServicesComponent from '../Components/ServicesComponent';
import AboutComponent from '../Components/AboutComponent';
import UpComingComponent from '../Components/UpcomingComponent';
import GalleryComponent from '../Components/GalleryComponent';
import PartnersComponent from '../Components/PartnersComponent';
import TestimonialComponent from '../Components/TestimonialComponent';
import PreviousComponent from '../Components/PreviousComponent';
import StatisticsComponent from '../Components/StatisticsComponent';



function Home() { 
  
return (
<div className="">
    <Slider />
    <ServicesComponent />
    <AboutComponent />
    <UpComingComponent />
    <GalleryComponent />
    <PartnersComponent />
    <PreviousComponent />
    <StatisticsComponent/>
    <TestimonialComponent />

</div>
);
}
export default Home;