// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-primary-200/70 bg-background/95 shadow-sm backdrop-blur-md">
//       <nav className="layout-page-container flex h-16 items-center justify-between gap-4">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 font-head text-[22px] font-extrabold tracking-[-0.03em] text-secondary-950 transition-colors hover:text-primary-600"
//         >
//           <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-300 bg-primary-50 text-[16px] shadow-sm">
//             LW
//           </span>
//           <span className="hidden sm:inline">Leather Wallets</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="nav-desktop-links">
//           <Link href="/" className="nav-link">
//             Home
//           </Link>
//           <Link href="/products" className="nav-link">
//             Products
//           </Link>
//           <Link href="/about" className="nav-link">
//             About
//           </Link>
//           <Link href="/contact" className="nav-link">
//             Contact
//           </Link>
//         </div>

//         {/* Right Actions */}
//         <div className="hidden items-center gap-3 lg:flex">
//           <button
//             type="button"
//             onClick={() => setSearchOpen(!searchOpen)}
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white text-secondary-950 shadow-sm transition-all hover:border-primary-500 hover:text-primary-600"
//             aria-label="Search products"
//           >
//             <Icon icon="mdi:magnify" className="h-5 w-5" />
//           </button>

//           <Link
//             href="/products"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white text-secondary-950 shadow-sm transition-all hover:border-primary-500 hover:text-primary-600"
//             aria-label="View products"
//           >
//             <Icon icon="mdi:cart-outline" className="h-5 w-5" />
//           </Link>

//           <Link href="/products" className="btn-base btn-size-md btn-brand">
//             Shop Now
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white text-secondary-950 shadow-sm lg:hidden"
//           aria-label="Toggle menu"
//         >
//           <Icon
//             icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
//             className="h-6 w-6"
//           />
//         </button>
//       </nav>

//       {/* Desktop Search Bar */}
//       {searchOpen && (
//         <div onBlur={() => setSearchOpen(false)} className="hidden absolute top-full left-0 right-0 border-t border-primary-200/70 bg-background py-4 lg:block">
//           <div className="layout-page-container">
//             <input
//               type="search"
//               placeholder="Search leather wallets..."
//               className="input-field"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSearchOpen(false);
//               }}
//             />
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 // const formData = new FormData(e.currentTarget);
//                 // const searchValue = formData.get('search')?.toString().trim();

//                 // if (!searchValue) return;

//                 setSearchOpen(false);

//               }}
//             >
//               <input
//                 name="search"
//                 type="search"
//                 placeholder="Search leather wallets..."
//                 className="input-field"
//                 autoFocus
//               />
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-full left-0 right-0 border-t border-primary-200/70 bg-background p-4 lg:hidden">
//           <div className="layout-page-container nav-mobile-panel">
//             <div className="flex flex-col gap-3">
//               <input
//                 type="search"
//                 placeholder="Search leather wallets..."
//                 className="input-field"
//               />

//               <Link
//                 href="/"
//                 className="nav-link block py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>

//               <Link
//                 href="/products"
//                 className="nav-link block py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Products
//               </Link>

//               <Link
//                 href="/about"
//                 className="nav-link block py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About
//               </Link>

//               <Link
//                 href="/contact"
//                 className="nav-link block py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="/products"
//                 className="btn-base btn-size-md btn-brand mt-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 border-b border-white/10 bg-secondary-950/90 w-full shadow-sm">
      <nav className="layout-page-container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-head text-[22px] font-extrabold tracking-[-0.03em] text-white transition-colors hover:text-primary-300"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-400/50 bg-primary-500 text-[16px] text-secondary-950 shadow-sm">
            LW
          </span>

          <span className="hidden sm:inline">
            Leather Wallets
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-subhead text-[14px] font-bold text-white/80 transition-colors duration-200 hover:text-primary-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm transition-all hover:border-primary-400 hover:bg-primary-500 hover:text-secondary-950"
            aria-label="Search products"
          >
            <Icon icon="mdi:magnify" className="h-5 w-5" />
          </button>

          <Link
            href="/products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm transition-all hover:border-primary-400 hover:bg-primary-500 hover:text-secondary-950"
            aria-label="View products"
          >
            <Icon icon="mdi:cart-outline" className="h-5 w-5" />
          </Link>

          <Link href="/products" className="btn-base btn-size-md btn-brand">
            Shop Now
            <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          <Icon
            icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
            className="h-6 w-6"
          />
        </button>
      </nav>

      {/* Desktop Search Bar */}
      {searchOpen && (
        <div className="absolute left-0 right-0 top-full hidden border-t border-white/10 bg-secondary-950/90 py-4 shadow-xl shadow-secondary-950/30 lg:block">
          <div className="layout-page-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const searchValue = formData.get('search')?.toString().trim();

                if (!searchValue) return;

                setSearchOpen(false);

                // Optional search redirect:
                // router.push(`/products?search=${encodeURIComponent(searchValue)}`);
              }}
            >
              <input
                name="search"
                type="search"
                placeholder="Search leather wallets..."
                className="input-field-dark"
                onBlur={() => setSearchOpen(false)}
                autoFocus
              />
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-secondary-950/95 py-5 shadow-xl shadow-secondary-950/30 lg:hidden">
          <div className="layout-page-container ">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-[10px] px-3 py-2 font-subhead text-[14px] font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-primary-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <input
                type="search"
                placeholder="Search leather wallets..."
                className="input-field-dark"
              />
              <Link
                href="/products"
                className="btn-base btn-size-md btn-brand mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
                <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}