'use client';

import { Product } from '@/data/products';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

// Star rating component
function StarRating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating) ? '★' : '☆');
  return (
    <span className="text-primary-600 text-sm">
      {stars.join('')} {rating}
    </span>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="card-clickable">

      {/* Image Placeholder */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-primary-50">
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <span className="badge-base badge-brand">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="text-heading-card mb-2 line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-body-tiny text-secondary-600">({product.reviewCount})</span>
        </div>

        <p className="text-body-small mb-4 line-clamp-2 text-secondary-600">
          {product.description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-label-default">Material:</span>
            <span className="text-body-tiny text-secondary-700">{product.material}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-label-default">Color:</span>
            <span className="text-body-tiny text-secondary-700">{product.color}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-light my-4"></div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-label-muted block mb-1">Price</span>
            <span className="font-head text-[20px] font-bold text-primary-600">
              ${product.price}
            </span>
          </div>
          {product.inStock ? (
            <span className="badge-base badge-brand">In Stock</span>
          ) : (
            <span className="badge-base bg-red-100 text-red-900">Out of Stock</span>
          )}
        </div>

        {/* Shop on Amazon Button */}
        <div
          // href={product.amazonLink}
          // target="_blank"
          // rel="nofollow sponsored noopener noreferrer"
          className="btn-base btn-size-md btn-brand w-full text-center"
        >
          Shop on Amazon
          <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
