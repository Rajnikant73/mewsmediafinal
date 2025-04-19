'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://via.placeholder.com/150x50?text=Mews+Media"
                alt="Mews Media"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={isActive('/') ? 'nav-link-active' : 'nav-link'}>
                Home
              </Link>
              <Link href="/about" className={isActive('/about') ? 'nav-link-active' : 'nav-link'}>
                About
              </Link>
              <Link href="/services" className={isActive('/services') ? 'nav-link-active' : 'nav-link'}>
                Services
              </Link>
              <Link href="/blog" className={isActive('/blog') ? 'nav-link-active' : 'nav-link'}>
                Blog
              </Link>
              <Link href="/courses" className={isActive('/courses') ? 'nav-link-active' : 'nav-link'}>
                Courses
              </Link>
              <Link href="/portfolio" className={isActive('/portfolio') ? 'nav-link-active' : 'nav-link'}>
                Portfolio
              </Link>
              <Link href="/contact" className={isActive('/contact') ? 'nav-link-active' : 'nav-link'}>
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/about')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/services')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/blog')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Blog
          </Link>
          <Link
            href="/courses"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/courses')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Courses
          </Link>
          <Link
            href="/portfolio"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/portfolio')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/contact')
                ? 'border-blue-500 text-blue-700 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;