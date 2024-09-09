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
    document: '/offline',
})(nextConfig);
