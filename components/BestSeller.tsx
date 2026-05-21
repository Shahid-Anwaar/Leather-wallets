'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = products
    .filter((product) =>
      [
        'classic-bifold-leather-wallet',
        'executive-brown-bifold-wallet',
        'leather-money-clip-wallet',
      ].includes(product.slug)
    )
    .slice(0, 3);

  return (
    <section className="layout-section-space bg-cream-soft">
      <div className="layout-page-container">
        {/* Section Header */}
        <div className="layout-heading-center mb-10 lg:mb-12">
          <span className="label-pill-uppercase mb-3">
            Bestsellers
          </span>

          <h2 className="text-heading-section mb-4">
            Top Picks for Everyday Style
          </h2>

          <p className="text-subtitle-section">
            Highlighted leather wallets loved for their premium feel, practical
            design, and timeless look.
          </p>
        </div>

        {/* Bestsellers Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4 xl:gap-7">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="card-clickable group overflow-hidden"
            >
              {/* Product Image */}
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="badge-base badge-brand">
                      Top Pick
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-primary-600">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon
                        key={index}
                        icon={
                          index < Math.round(product.rating)
                            ? 'mdi:star'
                            : 'mdi:star-outline'
                        }
                        className="h-4 w-4"
                      />
                    ))}
                  </div>

                  <span className="text-body-tiny">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-heading-card mb-3 transition-colors group-hover:text-primary-700">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-body-small mb-5 text-secondary-600">
                  {product.description}
                </p>

                <div className="mb-5 flex items-center justify-between border-t border-primary-200 pt-4">
                  <div>
                    <p className="text-label-small text-secondary-600">
                      Price
                    </p>
                    <p className="font-head text-[24px] font-extrabold text-primary-700">
                      ${product.price}
                    </p>
                  </div>

                  <span className="badge-base badge-neutral">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                <Link
                  href={product.amazonLink}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="btn-base btn-size-md btn-brand w-full"
                >
                  Shop on Amazon
                  <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}