'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const productCategories = [
  {
    label: 'Bifold Wallets',
    value: 'bifold-wallets',
    icon: 'mdi:wallet-outline',
  },
  {
    label: 'Trifold Wallets',
    value: 'trifold-wallets',
    icon: 'mdi:wallet-bifold-outline',
  },
  {
    label: 'Slim Wallets',
    value: 'slim-minimalist-wallets',
    icon: 'mdi:credit-card-outline',
  },
  {
    label: 'Card Holders',
    value: 'card-holders',
    icon: 'mdi:card-account-details-outline',
  },
  {
    label: 'Money Clip Wallets',
    value: 'money-clip-wallets',
    icon: 'mdi:cash-fast',
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Premium Collection"
        title="Explore Premium Leather Wallets"
        description="Browse bifold wallets, trifold wallets, slim wallets, card holders, and money clip wallets with direct Amazon shopping links."
        icon="mdi:wallet-outline"
        image="/pages/12.webp"
      />
      <Suspense fallback={<ProductsPageFallback />}>
        <ProductsPageContent />
      </Suspense>
    </>
  );
}

function ProductsPageFallback() {
  return (
    <div className="layout-section-space bg-cream-soft">
      <div className="layout-page-container">
        <p className="text-body-small">Loading products...</p>
      </div>
    </div>
  );
}

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const tempSelectedCategory = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    tempSelectedCategory
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(tempSelectedCategory);
  }, [tempSelectedCategory]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;

    return products.filter(
      (product: Product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const activeCategoryLabel =
    productCategories.find((category) => category.value === selectedCategory)
      ?.label || 'All Products';

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <section className="layout-section-space bg-cream-soft">
      <div className="layout-page-container">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-heading-subsection mb-2">
              {activeCategoryLabel}
            </h2>

            <p className="text-body-small">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <div className="field-stack relative mt-0 w-full max-w-full pt-0 sm:max-w-60">
            <div className="field-label absolute -top-2 left-3 w-30 bg-cream-soft px-2">
              Select Category
            </div>

            <select
              className="input-field outline-amber-700"
              value={selectedCategory || ''}
              onChange={(e) =>
                handleCategoryChange(e.target.value || null)
              }
            >
              <option value="">All Products</option>

              {productCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="card-basic mx-auto max-w-xl p-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <Icon icon="mdi:wallet-outline" className="h-8 w-8" />
            </div>

            <h3 className="text-heading-card mb-2">No Products Found</h3>

            <p className="text-body-small mb-6">
              We could not find products in this category. Try viewing all
              leather wallets.
            </p>

            <button
              type="button"
              onClick={() => handleCategoryChange(null)}
              className="btn-base btn-size-md btn-brand"
            >
              View All Products
            </button>
          </div>
        )}
        <CTASection
          label="Still Need Help?"
          title="Have Questions? Contact Us"
          subTitle="We’re here to help you with wallet selection, order questions, and customer support."
          btnText="Contact Us"
          btnLink="/contact"
        />
      </div>
    </section>
  );
}