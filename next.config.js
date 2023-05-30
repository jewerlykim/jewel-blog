const dotenv = require('dotenv');
dotenv.config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development',
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'images.unsplash.com',
      'user-images.githubusercontent.com',
      'github.com',
    ],
  },
};
