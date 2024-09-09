import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    clientsClaim: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
        {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'http-calls',
                networkTimeoutSeconds: 10,
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 24 * 60 * 60,
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            urlPattern: /\/offline/,
            handler: 'NetworkFirst',
            fallbacks: {
                //image: "/static/images/fallback.png",
                document: '/offline', // if you want to fallback to a custom page rather than /_offline
                // font: '/static/font/fallback.woff2',
                // audio: ...,
                // video: ...,
            },
        },
    ],
})(nextConfig);
