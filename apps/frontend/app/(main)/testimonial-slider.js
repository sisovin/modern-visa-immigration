import React from 'react';
import TestimonialCard from './components/TestimonialCard';

const testimonials = [
  {
    rating: 5,
    clientPhoto: 'path/to/photo1.jpg',
    quote: 'This service is amazing!',
    companyInfo: 'Company A',
  },
  {
    rating: 4,
    clientPhoto: 'path/to/photo2.jpg',
    quote: 'Very satisfied with the service.',
    companyInfo: 'Company B',
  },
  {
    rating: 5,
    clientPhoto: 'path/to/photo3.jpg',
    quote: 'Highly recommend!',
    companyInfo: 'Company C',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          rating={testimonial.rating}
          clientPhoto={testimonial.clientPhoto}
          quote={testimonial.quote}
          companyInfo={testimonial.companyInfo}
        />
      ))}
    </div>
  );
};

export default TestimonialSlider;
