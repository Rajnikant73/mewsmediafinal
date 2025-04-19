'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              className="h-10 w-auto"
              src="https://via.placeholder.com/150x50?text=Mews+Media"
              alt="Mews Media"
            />
            <p className="mt-4 text-sm text-gray-600">
              Your trusted partner for digital marketing, web development, and creative services in Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary-600">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary-600">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary-600">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary-600">
                  Video Production
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-600 hover:text-primary-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-sm text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                Lumbini, Nepal
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary-600" />
                +977 1234567890
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-primary-600" />
                info@mewsmedia.com
              </li>
            </ul>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Mews Media Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;