<template>
  <q-page class="row items-center justify-evenly">
    {{ user!.email }}
  </q-page>
</template>

<script setup lang="ts">
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>
