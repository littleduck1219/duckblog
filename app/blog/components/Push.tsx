'use client';

import { useEffect, useState } from 'react';

export default function Push() {
    const [isSupported, setIsSupported] = useState(false);
    const [permission, setPermission] = useState(Notification.permission);

    useEffect(() => {
        // 브라우저에서 서비스 워커 및 푸시 알림 지원 확인
        if ('serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window) {
            setIsSupported(true);
        } else {
            console.log('이 브라우저는 푸시 알림을 지원하지 않습니다.');
        }
    }, []);

    const handlePushNotification = async () => {
        if (!isSupported) {
            alert('푸시 알림을 지원하지 않는 브라우저입니다.');
            return;
        }

        try {
            console.log('Notification Permission:', Notification.permission);

            if (Notification.permission === 'default') {
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    alert('알림 권한을 허용해 주세요.');
                    return;
                }
            }

            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('Service Worker 등록됨:', registration);

            const notificationOptions = {
                body: '알림이 성공적으로 발송되었습니다!',
                icon: '/icons/logo512.png',
            };

            registration.showNotification('푸시 알림 테스트', notificationOptions);
            console.log('푸시 알림 발송됨:', notificationOptions);
        } catch (error) {
            console.error('푸시 알림 오류:', error);
        }
    };

    console.log(typeof Notification); // "function" 이 출력되어야 정상
    console.log(Notification.requestPermission); // "function" 이 출력되어야 정상

    return (
        <div className='container'>
            <button
                className='rounded-2xl bg-red-500 p-2 text-white'
                onClick={handlePushNotification}
                disabled={!isSupported || permission === 'denied'}
            >
                푸시 알림 보내기
            </button>
        </div>
    );
}
