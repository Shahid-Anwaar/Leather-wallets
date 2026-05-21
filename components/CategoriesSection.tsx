'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { walletCategories } from '@/data/categories';

export default function CategoriesSection() {
  return (
    <section className="layout-section-space bg-cream-soft">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="layout-heading-center mb-10 lg:mb-12">
          <span className="label-pill-uppercase mb-3">
            Collections
          </span>

          <h2 className="text-heading-section mb-4">
            Shop by Category
          </h2>

          <p className="text-subtitle-section">
            Choose from bifold, trifold, slim wallets, card holders, and money
            clip wallets.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-5 lg:gap-3 xl:gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {walletCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="card-clickable h-full overflow-hidden">
                <div className="flex min-h-56 flex-col items-center justify-center p-6 text-center transition-colors duration-300 group-hover:bg-primary-50 lg:px-4 xl:px-7">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] border border-primary-200 bg-primary-100 text-primary-700 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-secondary-950">
                    <Icon icon={category.icon} className="h-8 w-8" />
                  </div>

                  <h3 className="text-heading-card mb-2">
                    {category.name}
                  </h3>

                  <p className="text-body-small text-secondary-600">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 font-subhead text-[12px] font-bold text-primary-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}