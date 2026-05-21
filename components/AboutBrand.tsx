'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function AboutBrandSection() {
  const points = [
    {
      icon: 'mdi:check-decagram-outline',
      title: 'Quality First',
      text: 'Every wallet is selected with attention to leather texture, stitching, and long-term durability.',
    },
    {
      icon: 'mdi:hammer-wrench',
      title: 'Craftsmanship',
      text: 'Our focus is on wallets that feel refined, practical, and made for everyday confidence.',
    },
    {
      icon: 'mdi:shield-star-outline',
      title: 'Authentic Style',
      text: 'We highlight classic leather wallet designs that bring a premium and trustworthy feel.',
    },
  ];

  return (
    <section className="layout-section-space bg-cream-soft">
      <div className="layout-page-container">
        <div className="mx-auto max-w-5xl text-center">
          <span className="label-pill-uppercase">
            About the Brand
          </span>

          <h2 className="text-heading-section mx-auto mb-4 mt-5 max-w-3xl">
            Premium Leather Wallets Built on Quality and Authenticity
          </h2>

          <p className="text-body-large mx-auto max-w-3xl">
            Leather Wallets is created for people who value timeless style,
            practical design, and reliable everyday carry. Our goal is to make
            it easy to discover premium leather wallets that match your
            lifestyle, from classic bifold wallets to slim minimalist designs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-[22px] border border-primary-200 p-6 md:p-4 lg:p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-950/10"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[16px] bg-primary-100 text-primary-700">
                <Icon icon={point.icon} className="h-7 w-7" />
              </div>

              <h3 className="text-heading-small mb-2">
                {point.title}
              </h3>

              <p className="text-body-small text-secondary-600">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/about" className="btn-base btn-size-lg btn-brand">
            Read Our Story
            <Icon icon="mdi:arrow-right" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}