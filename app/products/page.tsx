'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PageHero from '@/components/PageHero';

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const tempSelectedCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(tempSelectedCategory);

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
    // if (!category) {
    //   router.push('/products');
    //   return;
    // }

    setSelectedCategory(category);
    // router.push(`/products?category=${category}`);
  };

  return (
    <>
      <PageHero
        label="Premium Collection"
        title="Explore Premium Leather Wallets"
        description="Browse bifold wallets, trifold wallets, slim wallets, card holders, and money clip wallets with direct Amazon shopping links."
        icon="mdi:wallet-outline"
        image="/pages/12.webp"
      />
      {/* Products Section */}
      <section className="layout-section-space bg-cream-soft">
        <div className="layout-page-container">
          {/* Top Bar */}
          <div className="mb-4 flex flex-wrap justify-between gap-4 mb-6 items-start">
            <div>
              <h2 className="text-heading-subsection mb-2">
                {activeCategoryLabel}
              </h2>

              <p className="text-body-small">
                Showing {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <div className="w-full max-w-full sm:max-w-60 mt-2 field-stack relative mt-0 pt-0">
              <div className="field-label w-30 absolute -top-2 px-2 bg-cream-soft left-3">Select Category</div>
              <select className='input-field outline-amber-700' value={selectedCategory || ""} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value={""}>All Products</option>
                {productCategories.map((category, i) => (
                  <option key={category.value} className='' value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
            {/* <div className="mb-10 flex">
              <button
                type="button"
                onClick={() => handleCategoryChange(null)}
                className={`btn-base btn-size-sm rounded-none rounded-l-xl p-3 ${selectedCategory === null ? 'btn-brand' : 'btn-outline'
                  }`}
              >
                <Icon icon="mdi:view-grid-outline" className="hidden lg:block h-5 w-5" />
                All Products
              </button>
              {productCategories.map((category, i) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategoryChange(category.value)}
                  className={`btn-base w-auto btn-size-sm transition-all p-3 
                  ${i === (productCategories.length - 1) ? "rounded-none rounded-r-xl" : "rounded-none"}
                  ${selectedCategory === category.value
                      ? 'btn-brand'
                      : 'btn-outline'
                    }`}
                >
                  <Icon icon={category.icon} className="h-5 w-5 hidden lg:block" />
                  {category.label}
                </button>
              ))}
            </div> */}
          </div>
          {/* Products Grid */}
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

              <h3 className="text-heading-card mb-2">
                No Products Found
              </h3>

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
        </div>
      </section>
    </>
  );
}