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
            urlPattern: /^https?.*/, // 모든 HTTP 및 HTTPS 요청에 적용
            handler: 'NetworkFirst', // 네트워크 우선, 실패 시 캐시된 리소스 사용
            options: {
                cacheName: 'http-cache',
                networkTimeoutSeconds: 10,
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 24 * 60 * 60, // 캐시된 항목을 1일 후 만료
                },
                cacheableResponse: {
                    statuses: [0, 200], // 성공적인 응답만 캐시
                },
            },
        },
        {
            urlPattern: /\/offline/, // 오프라인 페이지 요청 처리
            handler: 'CacheFirst', // 캐시에서 먼저 시도, 없으면 네트워크 요청
            options: {
                cacheName: 'offline-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 7 * 24 * 60 * 60, // 7일간 캐시 유지
                },
            },
        },
    ],
})(nextConfig);
