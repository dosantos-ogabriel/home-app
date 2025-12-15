import { defineBoot } from '#q-app/wrappers';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getAuth, type Auth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth/web-extension';
import { useAuthStore } from 'stores/auth-store';

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
let auth: Auth | null = null;

// Initialize Analytics only in browser environment
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    useAuthStore().setUser(user);
  });
}

export default defineBoot(() => {
  // Firebase is initialized and ready to use
  // You can import and use Firebase services in your components
});

export { app, analytics, auth };
export type { FirebaseApp, Analytics, Auth };
