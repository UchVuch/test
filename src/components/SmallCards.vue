<template>
  <div class="small-cards">
    <h1 class="h1-title small-cards__title">Карточки списком</h1>
    <h2 class="h2-title small-cards__subtitle">Маленькие</h2>
    <DishList :dishes="dishes" />
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue'
import DishList from '@/components/Dish/DishList.vue'
import { dishes } from '../assets/dishes'

// фетч данных выдаёт корс ошибку
// const dishes = ref([])

// onMounted(async () => {
//   const responseDishes = await fetch('https://www.jsonkeeper.com/b/QIQ3')
//   const dataDishes = await responseDishes.json()
//   dishes.value = [...dataDishes]
// })
</script>

<style scoped>
.small-cards {
  margin-bottom: 60px;
}

.small-cards__title {
  margin-bottom: 36px;
}

.small-cards__subtitle {
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .small-cards {
    margin-bottom: 36px;
  }

  .small-cards__title {
    margin-bottom: 24px;
  }

  .small-cards__subtitle {
    margin-bottom: 12px;
  }
}
</style>