import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function CTASection(
    { label = "Need a Wallet?",
        title = "Explore Our Premium Wallet Picks",
        subTitle = "Browse handpicked leather wallets with direct Amazon shopping links.",
        btnText = "Shop Wallets",
        btnLink = "/products",
    }:
        { label?: string, title?: string, subTitle?: string, btnText?: string, btnLink?: string }
) {
    return (
        <div className="mt-10 rounded-[24px] border border-primary-200 bg-secondary-950 p-6 text-center shadow-xl shadow-secondary-950/20 lg:mt-12 lg:p-10">
            <span className="badge-base badge-brand mb-4">
                {label}
            </span>

            <h2 className="text-heading-section mb-4 text-white">
                {title}
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-subtitle-section text-white/75">
                {subTitle}
            </p>

            <Link href={btnLink} className="btn-base btn-size-lg btn-brand">
                {btnText}
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
            </Link>
        </div>
    )
}
