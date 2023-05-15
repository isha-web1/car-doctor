import React from "react";
import person from "../../../assets/assets/images/about_us/person.jpg";
import parts from "../../../assets/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
        </div>
        <div className='lg:w-1/2'>
            <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
          <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this <br /> field</h1>
          <p className="py-6 text-2xl">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br /> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
