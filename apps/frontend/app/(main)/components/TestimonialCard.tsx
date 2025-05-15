import React from 'react';

const TestimonialCard = ({ rating, clientPhoto, quote, companyInfo }) => {
  return (
    <div className="testimonial-card p-4 border rounded shadow-lg">
      <div className="flex items-center mb-4">
        <img src={clientPhoto} alt="Client" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600">{companyInfo}</p>
        </div>
      </div>
      <p className="text-gray-800 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
