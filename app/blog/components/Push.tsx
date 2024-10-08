'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function Push() {
    const [isSupported, setIsSupported] = useState(false);
    const [permission, setPermission] = useState<string | null>(null); // 초기값을 null로 설정

    useEffect(() => {
        // 브라우저에서 서비스 워커 및 푸시 알림 지원 확인
        if (
            typeof window !== 'undefined' &&
            'serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window
        ) {
            setIsSupported(true);
            setPermission(Notification.permission); // 클라이언트에서만 Notification.permission 호출
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
            console.log('Notification Permission:', permission);

            if (permission === 'default') {
                const newPermission = await Notification.requestPermission();
                if (newPermission !== 'granted') {
                    alert('알림 권한을 허용해 주세요.');
                    return;
                }
                setPermission(newPermission);
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

    return (
        <div className='container'>
            <button
                className='flex rounded-full bg-red-500 p-2 text-white '
                onClick={handlePushNotification}
                disabled={!isSupported || permission === 'denied'}
            >
                <Image src='/alarm.svg' alt='bell' width={24} height={24} />
            </button>
        </div>
    );
}
