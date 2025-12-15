import { defineBoot } from '#q-app/wrappers';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBucDx3uzwYKe_hKFENHup80iSY9lg70Hk',
  authDomain: 'home-app-dosantos.firebaseapp.com',
  projectId: 'home-app-dosantos',
  storageBucket: 'home-app-dosantos.firebasestorage.app',
  messagingSenderId: '210751090226',
  appId: '1:210751090226:web:d7f0934960d531b213962b',
  measurementId: 'G-E2GV9FSVPL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: Analytics | null = null;

// Initialize Analytics only in browser environment
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export default defineBoot(() => {
  // Firebase is initialized and ready to use
  // You can import and use Firebase services in your components
});

export { app, analytics };
export type { FirebaseApp, Analytics };
