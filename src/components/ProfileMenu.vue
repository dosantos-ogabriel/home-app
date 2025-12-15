<template>
  <q-btn round>
    <q-avatar>
      <img v-if="userPicture" :src="userPicture" />
      <q-icon v-else name="person" />
    </q-avatar>
    <q-menu>
      <q-list style="min-width: 120px">
        <q-item clickable v-close-popup to="/profile">
          <q-item-section side>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>Perfil</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section side>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Sair</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { userPicture } = storeToRefs(authStore);
</script>
