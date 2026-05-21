'use client';

import { FormEvent, useState } from 'react';
import { Icon } from '@iconify/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    setEmail('');

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="layout-section-space pt-0 bg-cream-soft relative overflow-hidden">
      <div className=" layout-page-container pt-0">
        <div className="surface-black py-8 px-7">

        <div className="mx-auto  max-w-3xl">
          <div className="space-y-6 text-center">
            <span className="badge-base badge-dark">
              Newsletter
            </span>

            <h2 className="text-heading-section text-white">
              Get Top Wallet Deals Delivered to Your Inbox
            </h2>

            <p className="text-subtitle-section text-white/75">
              Subscribe for leather wallet deals, new product picks, buying tips,
              and premium style updates.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Icon
                  icon="mdi:email-outline"
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field-dark pl-12"
                />
              </div>

              <button
                type="submit"
                className="btn-base btn-size-lg btn-brand whitespace-nowrap"
              >
                Subscribe
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </button>
            </form>

            {submitted && (
              <div className="alert-base alert-success mx-auto mt-4 max-w-xl">
                Thank you for subscribing! Wallet deals will be delivered to your
                inbox.
              </div>
            )}

            <p className="text-body-tiny text-white/45">
              No spam. Just premium wallet picks and helpful buying guides.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary-300/10 blur-3xl" />
      </div>
      </div>
    </section>
  );
}