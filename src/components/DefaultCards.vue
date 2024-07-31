<template>
  <div class="default-cards">
    <h1 class="h1-title default-cards__title">Обычные карточки</h1>
    <h2 class="h2-title default-cards__subtitle">Обычные</h2>
    <ul class="dish-list">
      <li
        v-for="dish in dishes"
        :key="dish.id"
      >
        <DishCard
          :count="storeCardsCount.cards[dish.id] || 0"
          :id="dish.id"
          :title="dish.name"
          :weight="dish.weight"
          :weightUnit="dish.weight_unit"
          :image="dish.photo"
          :description="dish.description"
          :price="dish.price"
          :oldPrice="dish.old_price" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCardsCounterStore } from '../store'
import DishCard from '@/components/Dish/DishCard.vue'
import { dishes } from '../assets/dishes'

const storeCardsCount = useCardsCounterStore()
</script>

<style scoped>
.default-cards__title {
  margin-bottom: 36px;
}

.default-cards__subtitle {
  margin-bottom: 24px;
}

.dish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(177px, 288px));
  gap: 24px;
}

@media (max-width: 985px) {
  .dish-list {
    grid-template-columns: repeat(3, minmax(177px, 288px));
  }
}

@media (max-width: 768px) {
  .dish-list {
    grid-template-columns: repeat(3, minmax(177px, 240px));
    gap: 12px;
  }
  .default-cards__title {
    margin-bottom: 24px;
  }
  .default-cards__subtitle {
    margin-bottom: 12px;
  }
}

@media (max-width: 620px) {
  .dish-list {
    grid-template-columns: repeat(2, minmax(170px, 240px));
  }
}

@media (max-width: 390px) {
  .dish-list {
    grid-template-columns: repeat(2, minmax(170px, 177px));
  }
}
</style>