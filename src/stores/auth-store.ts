import type { User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from 'boot/firebase';
import { updateProfile } from 'firebase/auth';

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
  const updateUser = async (name: string, photoURL: string) => {
    if (!auth) {
      throw new Error('Auth not initialized');
    }
    await updateProfile(user.value!, { displayName: name, photoURL });
  };

  const userPicture = computed(() => {
    if (user.value) {
      switch (user.value.email) {
        case 'dosantos.ogabriel@gmail.com':
          return 'src/assets/frog.jpg';
      }
    }
    return '';
  });

  return {
    user,
    setUser,
    loading,
    signIn,
    updateUser,
    userPicture,
  };
});
