import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const posts = [
  {
    id: 1,
    title: 'How to Choose the Best Leather Wallet',
    excerpt:
      'Learn what to check before buying a leather wallet, including leather type, stitching, size, card space, and daily comfort.',
    date: 'May 20, 2026',
    author: 'Leather Wallets Team',
    category: 'Buying Guide',
    image: '/pages/2.webp',
  },
  {
    id: 2,
    title: 'Bifold vs Slim Wallet: Which One Is Better?',
    excerpt:
      'Compare classic bifold wallets and slim minimalist wallets to find the right style for your pocket and lifestyle.',
    date: 'May 18, 2026',
    author: 'Leather Wallets Team',
    category: 'Wallet Tips',
    image: '/pages/3.webp',
  },
  {
    id: 3,
    title: 'How to Care for a Leather Wallet',
    excerpt:
      'Simple leather wallet care tips to keep your wallet clean, soft, polished, and premium-looking for years.',
    date: 'May 15, 2026',
    author: 'Leather Wallets Team',
    category: 'Leather Care',
    image: '/pages/4.webp',
  },
  {
    id: 4,
    title: 'Why RFID Blocking Wallets Are Popular',
    excerpt:
      'Understand what RFID blocking means and why many modern leather wallets include this security feature.',
    date: 'May 12, 2026',
    author: 'Leather Wallets Team',
    category: 'Security',
    image: '/pages/5.webp',
  },
  {
    id: 5,
    title: 'Best Wallet Styles for Everyday Carry',
    excerpt:
      'Explore bifold, trifold, card holder, slim wallet, and money clip wallet styles for daily use.',
    date: 'May 10, 2026',
    author: 'Leather Wallets Team',
    category: 'Style Guide',
    image: '/pages/6.webp',
  },
  {
    id: 6,
    title: 'Full-Grain vs Top-Grain Leather Wallets',
    excerpt:
      'A simple guide to leather types so you can understand quality, texture, durability, and finish before buying.',
    date: 'May 8, 2026',
    author: 'Leather Wallets Team',
    category: 'Leather Quality',
    image: '/pages/7.webp',
  },
  {
    id: 7,
    title: 'Best Leather Wallet Gift Ideas for Men',
    excerpt:
      'Discover premium leather wallet gift ideas for birthdays, anniversaries, Father’s Day, and everyday luxury gifting.',
    date: 'May 6, 2026',
    author: 'Leather Wallets Team',
    category: 'Gift Guide',
    image: '/pages/8.webp',
  },
];

export default function BlogPage() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      <PageHero
        label="Leather Wallet Blog"
        title="Wallet Buying Guides, Leather Care, and Style Tips"
        description="Read helpful guides to choose the right leather wallet, compare styles, understand leather quality, and care for your wallet properly."
        icon="mdi:book-open-page-variant-outline"
        image="/pages/5.webp"
        ctaText="Shop Wallets"
        ctaHref="/products"
      />
      {/* Featured Article */}
      <section className="layout-section-space bg-cream-soft">
        <div className="layout-page-container">
          <article className="card-clickable group overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden bg-primary-50">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={900}
                  height={700}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5">
                  <span className="badge-base badge-brand">
                    Featured Guide
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 lg:p-10">
                <span className="label-pill-uppercase mb-4 w-fit">
                  {featuredPost.category}
                </span>

                <h2 className="text-heading-section mb-4 transition-colors group-hover:text-primary-700">
                  {featuredPost.title}
                </h2>

                <p className="text-body-default mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="mb-6 flex flex-wrap items-center gap-4 text-body-tiny">
                  <span className="flex items-center gap-2">
                    <Icon icon="mdi:account-outline" className="h-4 w-4" />
                    {featuredPost.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <Icon icon="mdi:calendar-outline" className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                </div>

                {/* <Link href="#" className="btn-base btn-size-md btn-brand">
                  Read Guide
                  <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                </Link> */}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="layout-section-space bg-cream">
        <div className="layout-page-container">
          <div className="layout-heading-center mb-10 lg:mb-12">
            <span className="label-pill-uppercase mb-3">
              Latest Articles
            </span>

            <h2 className="text-heading-section mb-4">
              Learn Before You Buy
            </h2>

            <p className="text-subtitle-section">
              Helpful wallet guides written for customers who want premium
              quality, smart features, and timeless leather style.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="card-clickable group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="badge-base badge-brand">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <h3 className="text-heading-card mb-3 transition-colors group-hover:text-primary-700">
                    {post.title}
                  </h3>

                  <p className="text-body-small mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="divider-light my-4" />

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-label-small mb-1">
                        {post.author}
                      </p>
                      <p className="text-body-tiny">
                        {post.date}
                      </p>
                    </div>

                    {/* <Link href="#" className="btn-text-link">
                      Read
                      <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                    </Link> */}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <CTASection />
        </div>
      </section>
    </>
  );
}