/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  images: {
    domains: ['www.murciaturistica.es'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
});
