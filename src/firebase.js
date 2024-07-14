// src/firebase.js

// 必要なFirebase SDKの機能をインポート
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 他の必要なインポートを追加

// Firebaseの設定
// 以下の設定をあなたのFirebaseプロジェクトの設定に置き換えてください
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
