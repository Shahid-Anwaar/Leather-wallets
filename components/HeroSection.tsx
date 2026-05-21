'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const heroFeatures = [
  {
    icon: 'mdi:check-decagram-outline',
    title: 'Genuine leather finish',
  },
  {
    icon: 'mdi:wallet-outline',
    title: 'Slim and elegant design',
  },
  {
    icon: 'mdi:shield-lock-outline',
    title: 'RFID blocking options',
  },
  {
    icon: 'mdi:gift-outline',
    title: 'Perfect gift choice',
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary-950 pt-12">
      <div className="layout-page-container layout-section-space">
        <div className="">
          {/* Background Image */}
          <Image
            src="/pages/1.png"
            alt="Premium leather wallet lifestyle banner"
            width={1600}
            height={900}
            priority
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-secondary-950 via-secondary-950/85 to-secondary-950/25" />
          <div className="absolute inset-0 bg-linear-to-t from-secondary-950/70 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ">
            {/* Left Content */}
            <div className="max-w-5xl space-y-6 order-2 lg:order-1">
              <span className="badge-base badge-dark bg-primary-300/70 text-primary-950">
                Premium Leather Collection
              </span>

              <h1 className="text-heading-hero text-white">
                Crafted for the Modern Gentlemen
              </h1>

              <p className="max-w-xl text-subtitle-hero text-white/80">
                Discover refined leather wallets crafted for timeless style,
                everyday function, and lasting confidence.
              </p>

              {/* Features */}
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {heroFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-3 text-white/85"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-400/30 bg-primary-500/15 text-primary-400">
                      <Icon icon={feature.icon} className="h-5 w-5" />
                    </span>

                    <span className="font-body text-[14px] font-medium leading-none">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-5 sm:flex-row">
                <Link
                  href={"/products"}
                  // target="_blank"
                  // rel="nofollow sponsored noopener noreferrer"
                  className="btn-base btn-size-lg btn-brand"
                >
                  Shop Now
                  <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
                </Link>

                <Link href="/about" className="btn-base btn-size-lg btn-on-dark">
                  Learn More
                  <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Premium Card */}
            <div className="flex justify-start lg:justify-end lg:order-2 ">
              <div className="surface-white max-w-2xl p-2 lg:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-primary-50">
                  <Image
                    src="/pages/12.png"
                    alt="Luxury leather wallet closeup"
                    width={700}
                    height={500}
                    className="h-full w-full object-fill"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="badge-base badge-brand">
                      Handpicked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}