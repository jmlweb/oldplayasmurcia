/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder(
  withPreact({
    images: {
      domains: ['www.murciaturistica.es'],
      deviceSizes: [640, 960, 1200, 1920],
      imageSizes: [384, 416, 448],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      images: {
        allowFutureImage: true,
      },
    },
  }),
);
