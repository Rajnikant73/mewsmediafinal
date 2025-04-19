import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mews Media - Digital Marketing & Creative Agency in Nepal',
  description: 'Your trusted partner for digital marketing, web development, and creative services in Nepal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Toaster position="top-right" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}