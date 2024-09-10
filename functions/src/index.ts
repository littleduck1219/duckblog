import { Request, Response } from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// Request, Response 타입 추가

// Firebase Admin SDK 초기화
admin.initializeApp();

export const sendPushToAll = functions.https.onRequest(async (req: Request, res: Response) => {
    try {
        // Firestore에서 FCM 토큰 가져오기
        const tokensSnapshot = await admin.firestore().collection('fcmTokens').get();
        const tokens = tokensSnapshot.docs.map((doc) => doc.data().token);

        if (tokens.length === 0) {
            res.status(404).send('FCM 토큰이 없습니다.');
            return;
        }

        // 푸시 알림 페이로드
        const payload = {
            notification: {
                title: '전체 사용자에게 보내는 알림',
                body: '이것은 푸시 알림 테스트입니다.',
            },
        };

        // 모든 사용자에게 푸시 알림 전송
        const response = await admin.messaging().sendToDevice(tokens, payload);
        console.log('푸시 알림 전송 성공:', response);
        res.status(200).send('푸시 알림이 전송되었습니다.');
    } catch (error) {
        console.error('푸시 알림 전송 실패:', error);
        res.status(500).send('푸시 알림 전송에 실패했습니다.');
    }
});
