/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  i18n: {
    locales: ['en-IN', 'en-US', 'nl-NL'],
    defaultLocale: 'en-IN',
  },
}

module.exports = nextConfig
