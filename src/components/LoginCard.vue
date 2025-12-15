<template>
  <q-card class="full-width bg-indigo-1">
    <q-card-section>
      <q-form @submit="onSubmit" class="q-gutter-y-sm" autofocus>
        <q-input v-model="email" label="Email" :rules="rules.email" lazy-rules type="email" />
        <q-input
          v-model="password"
          lazy-rules
          label="Senha"
          type="password"
          :rules="rules.password"
        />
        <div class="flex">
          <q-space />
          <q-btn label="Entrar" type="submit" color="primary" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { required, validEmail } from 'src/utils/form-rules';

const rules = {
  email: [required, validEmail],
  password: [required],
};

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.signIn(email.value, password.value);
  } catch (error) {
    console.error(error);
  }
  loading.value = false;
};
</script>
