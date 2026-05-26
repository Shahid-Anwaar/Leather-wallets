'use client';

import { FormEvent, useState } from 'react';
import { Icon } from '@iconify/react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactCards = [
    {
      title: 'Email',
      icon: 'mdi:email-outline',
      content: 'info@leatherwallets.com',
      href: 'mailto:info@leatherwallets.com',
    },
    {
      title: 'Phone',
      icon: 'mdi:phone-outline',
      content: '+92 300 1122333',
      href: 'tel:+15551234567',
    },
    {
      title: 'Business Hours',
      icon: 'mdi:clock-outline',
      content: 'Mon-Fri 9AM-5PM',
      href: null,
    },
  ];

  return (
    <>
      <PageHero
        label="Contact Leather Wallets"
        title="Need Help Choosing the Right Wallet?"
        description="Send us a message for product questions, wallet recommendations, affiliate inquiries, or general support."
        icon="mdi:message-text-outline"
        ctaText="View Wallets"
        ctaHref="/products"
      />
      {/* Contact Section */}
      <section className="layout-section-space bg-cream-soft">
        <div className="layout-page-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="form-card">
              <div className="mb-3 lg:mb-7">
                <span className="label-pill-uppercase mb-3">
                  Send Message
                </span>

                <h2 className="text-heading-subsection mb-3">
                  Let’s Talk About Your Wallet Needs
                </h2>

                <p className="text-body-small">
                  Fill out the form and we’ll get back to you with helpful
                  guidance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-5">
                <div className="field-stack">
                  <label htmlFor="name" className="field-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div className="field-stack">
                  <label htmlFor="email" className="field-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="field-stack">
                  <label htmlFor="subject" className="field-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="field-stack">
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="textarea-field"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-base btn-size-lg btn-brand w-full"
                >
                  Send Message
                  <Icon icon="mdi:send-outline" className="h-5 w-5" />
                </button>

                {submitted && (
                  <div className="alert-base alert-success">
                    Thank you for your message. We’ll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div>
                <span className="label-pill-uppercase mb-3">
                  Contact Information
                </span>

                <h2 className="text-heading-subsection mb-4">
                  We’re Here to Help
                </h2>

                <p className="text-body-default">
                  Reach out for wallet buying guidance, product questions,
                  collaboration requests, or website support.
                </p>
              </div>

              <div className="grid gap-3">
                {contactCards.map((item) => (
                  <div key={item.title} className="card-basic p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-100 text-primary-700">
                        <Icon icon={item.icon} className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-heading-card mb-2">
                          {item.title}
                        </h3>

                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-body-default font-semibold text-primary-600 transition-colors hover:text-primary-700"
                          >
                            {item.content}
                          </Link>
                        ) : (
                          <p className="text-body-default">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="card-basic p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-100 text-primary-700">
                      <Icon icon="mdi:map-marker-outline" className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-heading-card mb-2">
                        Address
                      </h3>

                      <p className="text-body-default leading-relaxed">
                        Leather Wallets
                        <br />
                        Sahiwal, Punjab 57000
                        <br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-primary-200 bg-primary-50 p-5">
                <div className="flex gap-3">
                  <Icon
                    icon="mdi:shield-check-outline"
                    className="mt-1 h-6 w-6 shrink-0 text-primary-700"
                  />

                  <p className="text-body-small">
                    We may earn from qualifying purchases through Amazon
                    affiliate links. Product prices and availability can change
                    on Amazon.
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