import { testimonialData } from '@/data/testimonials';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {/* Header */}
      <div className="bg-amber-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 snap-start">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tertiary tracking-tight text-center">
          What People Have To Say
        </h2>
      </div>

      {/* Testimonials */}
      {testimonialData.map((item, index) => (
        <div
          key={index}
          className={`w-screen h-screen flex flex-col justify-center items-center snap-start ${item.bgColor}`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 text-center max-w-3xl leading-relaxed mb-4">
            “{item.text}”
          </p>
          <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 text-center">
            — {item.author}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
