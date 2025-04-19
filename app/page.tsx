import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Globe2, Facebook, Instagram, Youtube, Award, Zap, HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-blue-500">Mews Media</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your trusted digital marketing partner in Lumbini. We help businesses grow their online presence and reach their full potential.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition duration-150">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Team working on digital marketing"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Mews Media
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We are a full-service digital marketing agency based in Lumbini, Nepal. Our team of experts specializes in helping businesses establish a strong online presence and achieve their marketing goals.
              </p>
              <div className="mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Local Market Knowledge</span>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Result-Driven Approach</span>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Our team at work"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive digital solutions for your business
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              What makes us different
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className="text-center"
              >
                <div className="flex justify-center">
                  <div className="h-12 w-12 text-blue-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.name}</h3>
                <p className="mt-2 text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <p className="text-gray-500 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Recent projects we've delivered
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  className="h-48 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to grow your business?</span>
            <span className="block text-blue-100">Let's start the journey together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    name: 'Facebook Ads',
    description: 'Targeted advertising campaigns to reach your ideal customers on Facebook and Instagram.',
    icon: <Facebook className="h-8 w-8" />,
  },
  {
    name: 'SEO Services',
    description: 'Improve your search rankings and drive organic traffic to your website.',
    icon: <Globe2 className="h-8 w-8" />,
  },
  {
    name: 'Google My Business',
    description: 'Optimize your local presence and attract customers in your area.',
    icon: <Award className="h-8 w-8" />,
  },
  {
    name: 'Web Design',
    description: 'Custom website development with modern design and functionality.',
    icon: <Zap className="h-8 w-8" />,
  },
  {
    name: 'Graphic Design',
    description: 'Eye-catching visuals for your brand, from logos to marketing materials.',
    icon: <HeartHandshake className="h-8 w-8" />,
  },
  {
    name: 'Video Ads',
    description: 'Engaging video content to showcase your products and services.',
    icon: <Youtube className="h-8 w-8" />,
  },
];

const benefits = [
  {
    name: 'Local Expertise',
    description: 'Deep understanding of the Nepali market and cultural context.',
    icon: <Globe2 className="h-12 w-12" />,
  },
  {
    name: 'Quick Delivery',
    description: 'Fast turnaround times without compromising on quality.',
    icon: <Clock className="h-12 w-12" />,
  },
  {
    name: 'Expert Team',
    description: 'Skilled professionals with years of industry experience.',
    icon: <Users className="h-12 w-12" />,
  },
];

const testimonials = [
  {
    quote: "Mews Media transformed our online presence. Their team's expertise in digital marketing helped us reach new customers and grow our business.",
    name: "Ram Kumar",
    title: "Business Owner, Lumbini",
  },
  {
    quote: "Professional, responsive, and results-driven. They truly understand the local market and delivered beyond our expectations.",
    name: "Sita Sharma",
    title: "Marketing Manager",
  },
  {
    quote: "The best digital marketing agency in Lumbini. Their video production and Facebook ad services have been game-changing for us.",
    name: "Hari Thapa",
    title: "CEO, Tech Company",
  },
];

const portfolio = [
  {
    title: "Restaurant Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Campaign",
    category: "Facebook Ads",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Product Launch",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];