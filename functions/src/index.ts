import { messaging } from './firebase-config';

// FCM 푸시 알림 토큰 요청
getToken(messaging, { vapidKey: 'your-vapid-public-key' })
  .then((currentToken) => {
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      // 이 토큰을 사용하여 특정 장치로 푸시 알림을 보낼 수 있습니다.
    } else {
      console.warn('No registration token available.');
    }
  })
  .catch((err) => {
    console.error('An error occurred while retrieving token:', err);
  });
