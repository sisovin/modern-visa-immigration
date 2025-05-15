import React, { useState } from 'react';
import Carousel from './carousel';
import TestimonialSlider from './testimonial-slider';
import StickyHeader from './components/StickyHeader';
import BookingForm from './components/BookingForm';

const HomePage = () => {
  const [booking, setBooking] = useState(null);

  const handleBookingSubmit = (bookingInfo) => {
    setBooking(bookingInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <StickyHeader />
      <h1 className="text-4xl font-bold text-center">Welcome to the Modern Visa and Immigration Management System</h1>
      <p className="text-center mt-4">Manage your visa applications and immigration status with ease.</p>
      
      <Carousel />

      <div className="services-grid mt-8">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="service-card p-4 border rounded shadow">
            <h3 className="text-xl font-bold">Visa Consultation</h3>
            <p>Get expert advice on your visa application process.</p>
          </div>
          <div className="service-card p-4 border rounded shadow">
            <h3 className="text-xl font-bold">Immigration Assistance</h3>
            <p>Receive support for your immigration status and documentation.</p>
          </div>
          <div className="service-card p-4 border rounded shadow">
            <h3 className="text-xl font-bold">Legal Support</h3>
            <p>Access legal services for visa and immigration matters.</p>
          </div>
        </div>
      </div>
      
      <BookingForm onSubmit={handleBookingSubmit} />
      <TestimonialSlider booking={booking} />
    </div>
  );
};

export default HomePage;
