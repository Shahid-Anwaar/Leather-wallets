'use client';

import { Icon } from '@iconify/react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Genuine Leather',
      description:
        'Crafted from premium leather with a rich texture, refined finish, and long-lasting quality.',
      icon: 'mdi:diamond-stone',
    },
    {
      title: 'RFID Blocking Technology',
      description:
        'Designed with RFID protection to help keep your cards safer during everyday use.',
      icon: 'mdi:shield-lock-outline',
    },
    {
      title: 'Slim & Lightweight Design',
      description:
        'Made for easy carrying with a clean, compact profile that fits smoothly in your pocket.',
      icon: 'mdi:wallet-outline',
    },
    {
  title: 'Perfect Gift Option',
  description:
    'A premium leather wallet makes a thoughtful gift for birthdays, holidays, business use, and everyday style.',
  icon: 'mdi:gift-outline',
}
  ];

  return (
    <section className="layout-section-space bg-cream">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="layout-heading-center mb-10 lg:mb-12">
          <span className="label-pill-uppercase mb-3">
            Why Choose Us
          </span>

          <h2 className="text-heading-section mb-4">
            Built for Style, Security, and Comfort
          </h2>

          <p className="text-subtitle-section">
            Premium leather wallets designed for daily use, smart protection,
            and a refined modern lifestyle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-7">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-basic group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] border border-primary-200 bg-primary-100 text-primary-700 shadow-sm transition-all duration-300 group-hover:bg-primary-500 group-hover:text-secondary-950">
                <Icon icon={feature.icon} className="h-8 w-8" />
              </div>

              <h3 className="text-heading-card mb-3">
                {feature.title}
              </h3>

              <p className="text-body-small text-secondary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}