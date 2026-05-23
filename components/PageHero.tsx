'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({
  label,
  title,
  description,
  icon = 'mdi:wallet-outline',
  image,
  ctaText,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-12">
      {/* <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-700/10 blur-3xl" /> */}

      <div className="layout-page-container relative z-10 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* Content */}
          <div className="max-w-4xl">
            <span className="label-pill-uppercase mb-5">
              {label}
            </span>

            <h1 className="text-heading-page mb-5 max-w-4xl">
              {title}
            </h1>

            <p className="text-subtitle-page max-w-2xl">
              {description}
            </p>

            {ctaText && ctaHref && (
              <div className="mt-7">
                <Link href={ctaHref} className="btn-base btn-size-md btn-brand">
                  {ctaText}
                  <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Visual Card */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[26px] border border-primary-200 bg-[#FFFDF8] p-4 shadow-xl shadow-secondary-950/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-primary-50">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    width={700}
                    height={520}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Icon icon={icon} className="h-20 w-20 text-primary-600" />
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-secondary-950/35 via-transparent to-transparent" />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Icon icon={icon} className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-heading-small">
                    Premium Leather Picks
                  </p>
                  <p className="text-body-tiny">
                    Curated for quality, style, and everyday use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}