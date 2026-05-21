'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="layout-section-space bg-cream">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="layout-heading-center mb-10 lg:mb-12">
          <span className="label-pill-uppercase mb-3">
            Featured Products
          </span>

          <h2 className="text-heading-section mb-4">
            Handpicked Leather Wallets
          </h2>

          <p className="text-subtitle-section">
            Explore our most popular leather wallets with product image, price,
            star rating, and direct Amazon shopping links.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 lg:gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center lg:mt-10">
          <Link href="/products" className="btn-text-link">
            View All Products
            <Icon icon="mdi:arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}