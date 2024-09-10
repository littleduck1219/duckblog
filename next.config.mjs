import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // 이미지 최적화 비활성화
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        fetch: true,
    },
};

const withPWA = nextPwa({
    dest: 'public',
    register: true,
    // skipWaiting: true,
    // disable: false, // 개발 환경에서도 PWA가 활성화되도록 설정
    customWorkerDir: 'public',
});

const config = withPWA({
    ...nextConfig,
});

export default config;
