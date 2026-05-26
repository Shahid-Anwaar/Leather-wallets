'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  const stats = [
    {
      number: '15+',
      label: 'Years of Excellence',
      icon: 'mdi:calendar-star',
    },
    {
      number: '10K+',
      label: 'Happy Customers',
      icon: 'mdi:account-heart-outline',
    },
    {
      number: '50+',
      label: 'Premium Designs',
      icon: 'mdi:wallet-outline',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      description:
        'We focus on premium leather texture, strong stitching, clean finishing, and long-lasting daily use.',
      icon: 'mdi:check-decagram-outline',
    },
    {
      title: 'True Craftsmanship',
      description:
        'Every wallet we recommend is selected for practical design, refined detail, and authentic leather character.',
      icon: 'mdi:hammer-wrench',
    },
    {
      title: 'Customer Trust',
      description:
        'Our goal is to help customers choose reliable leather wallets with confidence through clear product details.',
      icon: 'mdi:shield-star-outline',
    },
    {
      title: 'Timeless Style',
      description:
        'We highlight classic, masculine, and minimal wallet designs that stay stylish season after season.',
      icon: 'mdi:diamond-stone',
    },
  ];

  return (
    <>
      <PageHero
        label="About Leather Wallets"
        title="Curated Around Quality, Trust, and Timeless Leather Style"
        description="Learn more about our mission to help customers discover premium leather wallet picks with confidence."
        icon="mdi:shield-star-outline"
        image="/pages/1.webp"
        ctaText="Explore Wallets"
        ctaHref="/products"
      />

      {/* Our Story Section */}
      <section className="layout-section-space">
        <div className="layout-page-container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Content */}
            <div className="space-y-6">
              <span className="label-pill-uppercase">
                Our Story
              </span>

              <div>
                <h2 className="text-heading-section mb-4">
                  A Premium Wallet Guide Built for Modern Gentlemen
                </h2>

                <p className="text-body-large mb-4">
                  Leather Wallets was created to help customers find refined,
                  practical, and trustworthy leather wallets without confusion.
                  From classic bifold wallets to slim minimalist designs, our
                  collection focuses on products that combine style, comfort, and
                  everyday function.
                </p>

                <p className="text-body-large">
                  We believe a wallet should feel premium, look timeless, and
                  support your lifestyle for years. That is why we highlight
                  leather quality, craftsmanship, design, RFID protection, and
                  real-world usability before recommending any wallet.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-basic p-5">
                  <Icon
                    icon="mdi:wallet-outline"
                    className="mb-3 h-8 w-8 text-primary-600"
                  />
                  <h3 className="text-heading-small mb-2">
                    Premium Picks
                  </h3>
                  <p className="text-body-small">
                    Carefully selected wallet styles for daily use, gifting, and
                    professional carry.
                  </p>
                </div>

                <div className="card-basic p-5">
                  <Icon
                    icon="mdi:shield-lock-outline"
                    className="mb-3 h-8 w-8 text-primary-600"
                  />
                  <h3 className="text-heading-small mb-2">
                    Smart Protection
                  </h3>
                  <p className="text-body-small">
                    Many wallet options include RFID blocking features for safer
                    everyday card storage.
                  </p>
                </div>
              </div>

              <Link href="/products" className="btn-base btn-size-lg btn-brand">
                Explore Wallets
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] border border-primary-200 bg-primary-50 shadow-xl shadow-secondary-950/10">
              <Image
                src="/pages/2.webp"
                alt="Premium leather wallet craftsmanship"
                width={900}
                height={720}
                className="h-full min-h-[420px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-secondary-950/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/15 bg-secondary-950/80 p-5 backdrop-blur-md">
                <p className="text-heading-card mb-2 text-white">
                  Quality You Can Feel
                </p>
                <p className="text-body-small text-white/75">
                  Premium leather texture, refined stitching, and timeless
                  design selected for everyday confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="layout-section-space bg-cream-soft">
        <div className="layout-page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="card-basic p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[16px] bg-primary-100 text-primary-700">
                  <Icon icon={stat.icon} className="h-7 w-7" />
                </div>

                <div className="font-head text-[48px] font-bold leading-none text-primary-600 lg:text-[58px]">
                  {stat.number}
                </div>

                <p className="mt-3 text-body-default">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="layout-section-space">
        <div className="layout-page-container">
          <div className="layout-heading-center mb-10 lg:mb-12">
            <span className="label-pill-uppercase mb-3">
              Our Values
            </span>

            <h2 className="text-heading-section mb-4">
              What Makes Our Brand Feel Premium
            </h2>

            <p className="text-subtitle-section">
              Our values are built around quality, craftsmanship, authenticity,
              and customer confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-basic group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] border border-primary-200 bg-primary-100 text-primary-700 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-secondary-950">
                  <Icon icon={value.icon} className="h-8 w-8" />
                </div>

                <h3 className="text-heading-card mb-3">
                  {value.title}
                </h3>

                <p className="text-body-small">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <CTASection
  label="Need Guidance?"
  title="Find a Wallet That Matches Your Style"
  subTitle="Explore our carefully selected leather wallet picks made for daily use, smart organization, and timeless style."
  btnText="Explore Wallets"
  btnLink="/products"
/>
        </div>
        
      </section>
    </>
  );
}