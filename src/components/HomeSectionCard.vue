<template>
  <q-card class="full-width bg-indigo-1 cursor-pointer" @click="navigateTo(link)">
    <q-card-section>
      <div class="flex items-center q-gutter-x-lg">
        <q-icon :name="icon" size="2em" />
        <h6 class="q-my-sm">{{ title }}</h6>
      </div>
      <p>{{ description }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
  title: string;
  description: string;
  icon: string;
  link: string;
}>();

const router = useRouter();

const navigateTo = (link: string) => {
  void router.push(link);
};
</script>
