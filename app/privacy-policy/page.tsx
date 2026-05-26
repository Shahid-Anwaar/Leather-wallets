import Link from 'next/link';
import { Icon } from '@iconify/react';
import PageHero from '@/components/PageHero';

export default function PrivacyPolicyPage() {
  const policySections = [
    {
      title: '1. Introduction',
      icon: 'mdi:file-document-outline',
      content:
        'Leather Wallets operates as a leather wallet recommendation and Amazon affiliate website. This Privacy Policy explains how we collect, use, and protect information when visitors use our website.',
    },
    {
      title: '2. Information We May Collect',
      icon: 'mdi:database-outline',
      content:
        'We may collect basic contact information when you submit a contact form or subscribe to our newsletter. This may include your name, email address, subject, and message. We may also collect non-personal usage data such as pages visited, device type, browser type, and referral source.',
    },
    {
      title: '3. How We Use Information',
      icon: 'mdi:shield-check-outline',
      content:
        'We use collected information to respond to messages, improve website content, send newsletter updates when requested, analyze website performance, and improve the user experience.',
    },
    {
      title: '4. Cookies and Analytics',
      icon: 'mdi:cookie-outline',
      content:
        'Our website may use cookies or similar technologies to understand visitor behavior, improve website performance, and measure traffic. You can disable cookies through your browser settings.',
    },
    {
      title: '5. Third-Party and Amazon Links',
      icon: 'mdi:open-in-new',
      content:
        'Some links on our website may redirect users to Amazon or other third-party websites. Once you leave our website, the privacy policy and terms of that third-party website will apply.',
    },
    {
      title: '6. Data Security',
      icon: 'mdi:lock-outline',
      content:
        'We use reasonable measures to protect submitted information. However, no method of online transmission or electronic storage is completely secure, so we cannot guarantee absolute security.',
    },
    {
      title: '7. Changes to This Policy',
      icon: 'mdi:update',
      content:
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
    },
  ];

  const summaryPoints = [
  'We do not process checkout or payments on this website.',
  'Product buttons may redirect to Amazon affiliate links.',
  'Contact form data is used only to respond to your inquiry.',
  'Amazon’s own policies apply after users leave our website.',
];

  return (
    <>
      <PageHero
        label="Privacy Policy"
        // title="Privacy Policy"
        // label="Privacy & Data Protection"
  title="Your Privacy Matters to Us"
        description="Learn how Leather Wallets collects, uses, and protects your information, including contact form details, cookies, affiliate links, and website usage data."
        icon="mdi:file-document-shield-outline"
        ctaText='Contact Us'
        ctaHref='/contact'
      />

      <section className="layout-section-space bg-cream-soft">
        <div className="layout-page-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
            {/* Main Policy */}
            <div className="min-w-0 space-y-5 sm:space-y-6">
              {/* Amazon Affiliate Disclosure */}
              <section className="rounded-[20px] border border-primary-200 bg-secondary-950 p-5 text-white shadow-xl shadow-secondary-950/20 sm:rounded-[24px] sm:p-6 lg:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary-500 text-secondary-950 sm:h-14 sm:w-14 sm:rounded-[16px]">
                  <Icon icon="mdi:amazon" className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>

                <h2 className="text-heading-subsection mb-3 text-white sm:mb-4">
                  Amazon Affiliate Disclosure
                </h2>

                <p className="text-body-default text-white/75">
                  As an Amazon Associate, we may earn from qualifying purchases.
                  Some product links on this website may redirect to Amazon.
                  Product prices, ratings, reviews, and availability may change
                  on Amazon.
                </p>
              </section>

              {policySections.map((section) => (
                <section key={section.title} className="card-basic p-5 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-primary-100 text-primary-700 sm:h-12 sm:w-12">
                      <Icon icon={section.icon} className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-heading-subsection mb-3">
                        {section.title}
                      </h2>

                      <p className="text-body-default">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </section>
              ))}

              {/* Contact */}
              <section className="card-basic p-5 sm:p-6 lg:p-8">
                <h2 className="text-heading-subsection mb-3 sm:mb-4">
                  8. Contact Us
                </h2>

                <p className="text-body-default mb-5">
                  If you have any questions about this Privacy Policy, contact
                  us anytime.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link
                    href="mailto:privacy@leatherwallets.com"
                    className="flex min-w-0 items-center gap-3 rounded-[16px] border border-primary-200 bg-primary-50 p-4 transition-colors hover:border-primary-400"
                  >
                    <Icon
                      icon="mdi:email-outline"
                      className="h-6 w-6 shrink-0 text-primary-700"
                    />

                    <span className="break-all text-body-small font-semibold">
                      privacy@leatherwallets.com
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 rounded-[16px] border border-primary-200 bg-primary-50 p-4 transition-colors hover:border-primary-400"
                  >
                    <Icon
                      icon="mdi:message-outline"
                      className="h-6 w-6 shrink-0 text-primary-700"
                    />

                    <span className="text-body-small font-semibold">
                      Contact Page
                    </span>
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-[20px] border border-primary-200 bg-[#FFFDF8] p-5 shadow-lg shadow-secondary-950/5 sm:rounded-[24px] sm:p-6 lg:sticky lg:top-24">
              <span className="label-pill-uppercase mb-4">
                Quick Summary
              </span>

              <h2 className="text-heading-card mb-4">
                What This Means
              </h2>

              <ul className="space-y-4">
                {summaryPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Icon
                      icon="mdi:check-circle"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                    />

                    <span className="text-body-small">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="divider-light my-6" />

              <Link
                href="/products"
                className="btn-base btn-size-md btn-brand w-full"
              >
                View Wallets
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}