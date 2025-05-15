import React from 'react';
import GoogleMap from './components/GoogleMap';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center mt-4">We would love to hear from you! Please reach out to us using the information below.</p>
      
      <div className="contact-info mt-8">
        <h2 className="text-2xl font-bold">Our Office</h2>
        <p>123 Main Street, Suite 100</p>
        <p>City, State, ZIP</p>
        <p>Email: contact@modernvisa.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      
      <GoogleMap />
    </div>
  );
};

export default ContactPage;
