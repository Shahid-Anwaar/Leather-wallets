'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const guides = [
  {
    title: 'How to Choose the Best Leather Wallet',
    slug: '/blog',
    image: '/pages/3.webp',
    category: 'Buying Guide',
    description:
      'Learn what to check before choosing a leather wallet, including leather quality, size, stitching, and daily use.',
  },
  {
    title: 'Bifold vs Slim Wallet: Which One Is Better?',
    slug: '/blog',
    image: '/pages/4.webp',
    category: 'Wallet Tips',
    description:
      'Compare classic bifold wallets and slim minimalist wallets to find the right option for your lifestyle.',
  },
  {
    title: 'How to Care for a Leather Wallet',
    slug: '/blog',
    image: '/pages/5.webp',
    category: 'Leather Care',
    description:
      'Simple care tips to keep your leather wallet looking clean, polished, and premium for years.',
  },
];

export default function BuyingGuideSection() {
  return (
    <section className="layout-section-space bg-cream">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-5 text-center lg:mb-12 lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <span className="label-pill-uppercase mb-3">
              Buying Guide
            </span>

            <h2 className="text-heading-section mb-4">
              Learn Before You Choose
            </h2>

            <p className="text-subtitle-section">
              SEO-friendly leather wallet guides to help customers compare
              styles, understand quality, and choose the right wallet.
            </p>
          </div>

          <Link href="/blog" className="btn-base btn-size-md btn-outline">
            View All Articles
            <Icon icon="mdi:arrow-right" className="h-5 w-5" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.slug}
              className="card-clickable group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={700}
                  height={520}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4">
                  <span className="badge-base badge-brand">
                    {guide.category}
                  </span>
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="text-heading-card mb-3 transition-colors group-hover:text-primary-700">
                  {guide.title}
                </h3>

                <p className="text-body-small mb-5 text-secondary-600">
                  {guide.description}
                </p>

                {/* <span className="btn-text-link">
                  Read Guide
                  <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}