// next.config.mjs
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // 추가 옵션을 원하면 여기에 정의
};

export default withPWA({
    dest: 'public', // PWA 파일을 public 폴더에 저장
    register: true,
    skipWaiting: true,
    clientsClaim: true,
    disable: process.env.NODE_ENV === 'development', // 개발 환경에서 PWA 비활성화
    runtimeCaching: [
        {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'http-calls',
                networkTimeoutSeconds: 10,
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 24 * 60 * 60, // 24시간
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            urlPattern: /\/offline/,
            handler: 'NetworkOnly', // 네트워크만 사용하고, 실패하면 offline 페이지를 fallback으로 사용
            options: {
                cacheName: 'offline-cache',
                fallbackURL: '/offline', // fallback URL 설정
            },
        },
    ],
})(nextConfig);
