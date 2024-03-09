/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    NEXT_PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
    NEXT_PUBLIC_AUTH_DOMAIN: process.env.PUBLIC_AUTH_DOMAIN,
    NEXT_PUBLIC_DATABASE_URL: process.env.PUBLIC_DATABASE_URL,
    NEXT_PUBLIC_PROJECT_ID: process.env.PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_STORAGE_BUCKET: process.env.PUBLIC_STORAGE_BUCKET,
    NEXT_PUBLIC_MESSAGE_SENDER_ID: process.env.PUBLIC_MESSAGE_SENDER_ID,
    NEXT_PUBLIC_APP_ID: process.env.PUBLIC_APP_ID,
    NEXT_PUBLIC_MEASUREMENT_ID: process.env.PUBLIC_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
