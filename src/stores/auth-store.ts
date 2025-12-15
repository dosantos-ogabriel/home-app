import type { User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from 'boot/firebase';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(true);

  const setUser = (value: User | null) => {
    if (loading.value) loading.value = false;
    user.value = value;
  };
  const signIn = async (email: string, password: string) => {
    if (!auth) {
      throw new Error('Auth not initialized');
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
  };

  return {
    user,
    setUser,
    loading,
    signIn,
  };
});
