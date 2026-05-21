'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  const socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      icon: 'mdi:facebook',
    },
    {
      label: 'Instagram',
      href: '#',
      icon: 'mdi:instagram',
    },
    {
      label: 'Pinterest',
      href: '#',
      icon: 'mdi:pinterest',
    },
    {
      label: 'X',
      href: '#',
      icon: 'mdi:twitter',
    },
  ];

  return (
    <footer className="surface-black rounded-none layout-section-space">
      <div className="layout-page-container">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 font-head text-[24px] font-extrabold text-white transition-colors hover:text-primary-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-400/40 bg-primary-500 text-[16px] text-secondary-950">
                LW
              </span>
              Leather Wallets
            </Link>

            <p className="text-body-small text-white/75">
              Premium leather wallets crafted with precision, quality, and
              timeless style.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all hover:border-primary-400 hover:bg-primary-500 hover:text-secondary-950"
                >
                  <Icon icon={social.icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-heading-small mb-4 text-white">
                Links
              </h4>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policy Links */}
            <div>
              <h4 className="text-heading-small mb-4 text-white">
                Support
              </h4>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Buying Guide
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    className="text-body-small text-white/70 transition-colors hover:text-primary-300"
                  >
                    Wallet Collection
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Links */}


          {/* Contact Info */}
          <div>
            <h4 className="text-heading-small mb-4 text-white">
              Contact
            </h4>

            <div className="space-y-3">
              <p className="flex items-start gap-2 text-body-small text-white/70">
                <Icon
                  icon="mdi:email-outline"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-300"
                />
                <Link
                  href="mailto:info@leatherwallets.com"
                  className="transition-colors hover:text-primary-300"
                >
                  info@leatherwallets.com
                </Link>
              </p>

              <p className="flex items-start gap-2 text-body-small text-white/70">
                <Icon
                  icon="mdi:phone-outline"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-300"
                />
                <Link
                  href="tel:+15551234567"
                  className="transition-colors hover:text-primary-300"
                >
                  +92 300 1122333
                </Link>
              </p>

              <p className="flex items-start gap-2 text-body-small text-white/70">
                <Icon
                  icon="mdi:clock-outline"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-300"
                />
                Mon-Fri 9AM-5PM
              </p>
            </div>
          </div>
        </div>

        {/* Amazon Disclaimer */}
        <div className="mb-6 rounded-[16px] border border-primary-400/20 bg-white/5 p-4">
          <p className="text-center text-body-tiny text-white/65">
            As an Amazon Associate, we may earn from qualifying purchases.
            Product prices and availability may change on Amazon.
          </p>
        </div>

        <div className="divider-dark mb-6" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-body-tiny text-white/55">
            &copy; 2024 Leather Wallets. All rights reserved.
          </p>

          <p className="text-body-tiny text-white/55">
            Built for premium leather wallet recommendations.
          </p>
        </div>
      </div>
    </footer>
  );
}