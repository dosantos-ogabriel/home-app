<template>
  <q-page class="q-pa-md">
    <q-form class="q-gutter-y-sm" @submit="onSubmit">
      <q-input v-model="email" label="Email" readonly filled />
      <q-input v-model="name" label="Nome" :rules="rules.name" lazy-rules />
      <div class="flex">
        <q-space />
        <q-btn label="Salvar" type="submit" color="primary" :loading="loading" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia';
import { required } from 'src/utils/form-rules';
import { useQuasar } from 'quasar';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const $q = useQuasar();

const rules = {
  name: [required],
};

const name = ref(user.value?.displayName || '');
const email = ref(user.value?.email || '');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.updateUser(name.value, '');
    $q.notify({
      message: 'Perfil atualizado com sucesso',
      color: 'positive',
      icon: 'check',
    });
  } catch (error) {
    console.error(error);
    $q.notify({
      message: 'Erro ao atualizar perfil',
      color: 'negative',
      icon: 'error',
    });
  } finally {
    loading.value = false;
  }
};
</script>
