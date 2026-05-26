'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import CTASection from '@/components/CTASection';

export default function NotFoundPage() {
    const quickLinks = [
        {
            title: 'Explore Wallets',
            description: 'Browse premium leather wallet picks selected for style and daily use.',
            href: '/products',
            icon: 'mdi:wallet-outline',
        },
        {
            title: 'About Our Brand',
            description: 'Learn how we select quality leather wallets with trust and care.',
            href: '/about',
            icon: 'mdi:shield-star-outline',
        },
        {
            title: 'Contact Support',
            description: 'Need help finding the right wallet? Our team is here to guide you.',
            href: '/contact',
            icon: 'mdi:headset',
        },
    ];

    return (
        <>
            <section className="layout-section-space bg-cream-soft">
                <div className="layout-page-container pt-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="label-pill-uppercase mb-0">
                            Page Not Found
                        </span>

                        <h1 className="text-heading-hero font-body py-5">
                            404
                        </h1>

                        <h2 className="text-heading-section mb-4">
                            This Page Seems to Be Missing
                        </h2>

                        <p className="text-subtitle-section mx-auto mb-8 max-w-2xl">
                            The page you are looking for may have been moved, removed, or the
                            link may be incorrect. Let’s help you get back to our premium
                            leather wallet collection.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/" className="btn-base btn-size-lg btn-brand">
                                Back to Home
                                <Icon icon="mdi:home-outline" className="h-5 w-5" />
                            </Link>

                            <Link href="/products" className="btn-base btn-size-lg btn-outline">
                                Explore Wallets
                                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
                        {quickLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="card-basic group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
                            >
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] border border-primary-200 bg-primary-100 text-primary-700 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-secondary-950">
                                    <Icon icon={item.icon} className="h-8 w-8" />
                                </div>

                                <h3 className="text-heading-card mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-body-small">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="layout-section-space">
                <div className="layout-page-container">
                    <CTASection
  label="Still Need Help?"
  title="Can’t Find the Page You’re Looking For?"
  subTitle="The page may have been moved or removed. You can go back to the homepage or contact us if you need help finding something."
  btnText="Go to Homepage"
  btnLink="/"
/>
                </div>
            </section>
        </>
    );
}