'use client';

import { Icon } from '@iconify/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'James Carter',
      location: 'New York, USA',
      text: 'The leather feels premium and the stitching is excellent. It looks elegant and fits perfectly in my pocket.',
      rating: 5,
    },
    {
      name: 'Daniel Brooks',
      location: 'Austin, USA',
      text: 'I bought the slim wallet and it is exactly what I wanted. Lightweight, clean, and very practical for daily use.',
      rating: 5,
    },
    {
      name: 'Michael Turner',
      location: 'London, UK',
      text: 'Beautiful finish and very durable. The wallet feels expensive and the RFID feature gives extra confidence.',
      rating: 5,
    },
  ];

  return (
    <section className="layout-section-space bg-cream">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="layout-heading-center mb-10 lg:mb-12">
          <span className="label-pill-uppercase mb-3">
            Customer Reviews
          </span>

          <h2 className="text-heading-section mb-4">
            What Our Customers Say
          </h2>

          <p className="text-subtitle-section">
            Short reviews from customers who love the quality, style, and daily
            comfort of premium leather wallets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-3 lg:gap-4 xl:gap-7">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-basic p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-4 lg:p-7"
            >
              {/* Rating */}
              <div className="mb-5 flex items-center gap-1 text-primary-600">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Icon key={index} icon="mdi:star" className="h-5 w-5" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-default mb-6 italic text-secondary-700">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="border-t border-primary-200 pt-5">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Icon icon="mdi:account" className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-heading-small">
                      {testimonial.name}
                    </p>
                    <p className="text-label-muted mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}