import React from 'react';
import Link from '@docusaurus/Link';

export default function SCDEXHeroComponent() {
  return (
    <div className="relative">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Text Content */}
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-8">
            We're building an
            <br />
            <span className="font-extrabold">open exchange standard</span> for
            <br />
            global supply chain data.
          </h1>
          <Link
            to="/docs/intro"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-base font-medium hover:border-gray-400 transition-colors"
          >
            Read More
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Supply Chain Images */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 hidden lg:block">
          <img
            src="/img/supply-chain-objects.png"
            alt="Supply Chain Objects"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Orange Section */}
      <div className="bg-[#CB6842] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-white text-sm uppercase tracking-wide mb-4">
              An Open Data Ecosystem
            </div>
            <p className="text-white text-xl font-light leading-relaxed">
              As new regulations, changing environmental conditions,
              and shifting consumer values rapidly change the state of
              supply chains reporting, we need tools for interoperable
              data sharing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
