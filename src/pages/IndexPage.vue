<template>
  <q-page class="q-pa-md">
    <HomeSectionCard
      v-for="section in sections"
      :key="section.title"
      :title="section.title"
      :description="section.description"
      :icon="section.icon"
      :link="section.link"
    />
  </q-page>
</template>

<script setup lang="ts">
import HomeSectionCard from 'components/HomeSectionCard.vue';

const sections = [
  {
    title: 'Filmes',
    description: 'Lista de filmes assistidos',
    icon: 'movie',
    link: '/movies',
  },
];
</script>
