<template>
  <div class="container cards-page">
    <SmallCards />
    <DefaultCards />
  </div>
</template>

<script setup lang="ts">
import SmallCards from '@/components/SmallCards.vue'
import DefaultCards from '@/components/DefaultCards.vue'
</script>

<style scoped>
.cards-page {
  padding-block: 60px;
}

@media (max-width: 768px) {
  .cards-page {
    padding-block: 36px;
  }
}
</style>