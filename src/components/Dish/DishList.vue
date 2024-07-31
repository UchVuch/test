<template>
  <ul class="dish-list">
    <li
      v-for="dish in dishes"
      :key="dish.id"
    >
      <DishCard
        viewType="list"
        width="392px"
        :count="storeCardsCount.cards[Number(dish.id)] || 0"
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
</template>

<script setup lang="ts">
import { useCardsCounterStore } from '../../store'
import DishCard from './DishCard.vue'

const storeCardsCount = useCardsCounterStore()

export interface Dish {
  id?: number
  name?: string
  weight?: string | number
  description?: string
  old_price?: string | number | null
  price?: string | number 
  photo?: string
  weight_unit?: string
}

defineProps<{
  dishes: Dish[]
}>()
</script>

<style scoped>
.dish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

@media (max-width: 985px) {
  .dish-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .dish-list {
    gap: 12px;
  }
}

@media (max-width: 620px) {
  .dish-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>