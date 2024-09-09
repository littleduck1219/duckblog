import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // 이미지 최적화 비활성화
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
        {
            urlPattern: /^https?.*/, // 모든 HTTP 요청 캐시
            handler: 'NetworkFirst', // 네트워크가 우선, 실패 시 캐시 사용
            options: {
                cacheName: 'http-cache',
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
            urlPattern: /\/offline\.html/, // 오프라인 페이지 캐시
            handler: 'CacheFirst', // 캐시에서 먼저 시도
            options: {
                cacheName: 'offline-cache',
                expiration: {
                    maxEntries: 1,
                },
            },
        },
    ],
})(nextConfig);
