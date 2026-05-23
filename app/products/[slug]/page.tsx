import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@iconify/react';
import { products, Product } from '@/data/products';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatCategory(category: string) {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-primary-600">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          icon={index < Math.round(rating) ? 'mdi:star' : 'mdi:star-outline'}
          className="h-5 w-5"
        />
      ))}
      <span className="ml-2 text-body-small font-semibold text-secondary-700">
        {rating}
      </span>
    </div>
  );
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = products.find((p: Product) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}

      {/* Product Details */}
      <section className="layout-section-space pt-24">

        <div className="layout-page-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="space-y-5 sticky top-24 self-start">
              <div className="flex items-center gap-2 py-0 text-body-small">
                <Link
                  href="/products"
                  className="font-semibold btn-text-link text-primary-600 transition-colors hover:text-primary-700"
                >
                  Products
                </Link>
                <Icon
                  icon="mdi:chevron-right"
                  className="h-4 w-4 text-secondary-500"
                />
                <span className="line-clamp-1 text-secondary-950">
                  {product.name}
                </span>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-primary-200 bg-primary-50 shadow-xl shadow-secondary-950/10">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={900}
                    height={900}
                    priority
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-5 top-5">
                    <span className="badge-base badge-brand">
                      Premium Pick
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-primary-200 bg-primary-50 p-4">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:shield-check-outline"
                    className="mt-0.5 h-6 w-6 shrink-0 text-primary-700"
                  />

                  <p className="text-body-small">
                    Product images are used for display. Final price and
                    availability may change on Amazon.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="label-pill-uppercase mb-4">
                  {formatCategory(product.category)}
                </span>

                <h1 className="text-heading-page mb-4">
                  {product.name}
                </h1>

                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <StarRating rating={product.rating} />

                  <span className="text-body-small text-secondary-600">
                    ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-[18px] border border-primary-200 bg-cream p-5 shadow-sm">
                  <div>
                    <p className="text-label-default mb-2">
                      Price
                    </p>

                    <p className="font-head text-[38px] font-bold leading-none text-primary-600">
                      ${product.price}
                    </p>
                  </div>

                  {product.inStock ? (
                    <span className="badge-base badge-brand">
                      In Stock
                    </span>
                  ) : (
                    <span className="badge-base border border-red-200 bg-red-50 text-red-800">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-heading-card mb-3">
                  Description
                </h2>

                <p className="text-body-default leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Details */}
              <div className="card-basic p-6">
                <h2 className="text-heading-card mb-5">
                  Product Details
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-primary-200 pb-4">
                    <span className="text-label-default">
                      Material:
                    </span>

                    <span className="text-body-default text-right font-semibold">
                      {product.material}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-primary-200 pb-4">
                    <span className="text-label-default">
                      Color:
                    </span>

                    <span className="text-body-default text-right font-semibold">
                      {product.color}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-label-default">
                      Category:
                    </span>

                    <span className="text-body-default text-right font-semibold">
                      {formatCategory(product.category)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-heading-card mb-4">
                  Key Features
                </h2>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature: string) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-[14px] border border-primary-200 bg-white/60 p-3 text-left"
                    >
                      <Icon
                        icon="mdi:check-circle"
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                      />

                      <span className="text-body-small">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shop on Amazon Button */}
              <Link
                href={product.amazonLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="btn-base btn-size-lg btn-brand w-full"
              >
                Shop on Amazon
                <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
              </Link>

              {/* Affiliate / Quality Note */}
              <div className="rounded-[18px] border border-primary-200 bg-primary-50 p-4">
                <div className="flex gap-3">
                  <Icon
                    icon="mdi:information-outline"
                    className="mt-0.5 h-6 w-6 shrink-0 text-primary-700"
                  />

                  <p className="text-body-tiny">
                    <span className="font-bold">Affiliate Notice:</span> As an
                    Amazon Associate, we may earn from qualifying purchases. We
                    recommend wallets based on style, material, features, and
                    overall value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}