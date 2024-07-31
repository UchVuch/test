<template>
  <div class="card" :class="{'list': viewType === 'list'}">
    <img
      v-if="image"
      class="card__image"
      :src="image"
      :alt="title"
      loading="lazy"
    >
    <div class="card__content">
      <div class="card__content-top">
        <h4 class="card__title h4-title">{{ title }}</h4>
        <span class="card__weight">{{ weight }} {{ weightUnit }}</span>
      </div>
      <p 
        v-if="description"
        class="card__description"
      >
        {{ description }}
      </p>
      <div class="card__content-bottom">
        <div class="card__price">
          <span class="price" :class="{'price--old': oldPrice}">
            {{ price }} ₽
          </span>
          <span
            v-if="oldPrice"
            class="price price--current"
          >
            {{ oldPrice }} ₽
          </span>
        </div>
        <UiStepperCounter :count="count" @change="updateDishCount($event, id)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCardsCounterStore } from '../../store'
import getRuWeightUnit from '../../utils/getRuWeightUnit'
import UiStepperCounter from '@/components/ui/UiStepperCounter.vue'
import { Dish } from './types'

const storeCardsCount = useCardsCounterStore()

type ViewType = 'list' | 'default'

interface DishCardProps extends Dish {
  viewType?: ViewType,
  width?: string,
  count?: number
}

const props = withDefaults(defineProps<DishCardProps>(), {
  viewType: 'default',
  weightUnit: 'gram',
  width: '288px',
  count: 0
})

const weightUnit = computed(() => {
  return getRuWeightUnit(props.weightUnit)
})

const updateDishCount = (count: number, id: number | undefined) => {
  storeCardsCount.setCardCount(id, count)
}
</script>

<style scoped>
.card {
  border-radius: 18px;
  border: 1px solid var(--c-border-gray);
  display: flex;
  flex-direction: column;
  max-width: v-bind(width);
  height: 100%;
  background-color: #fff;
}
.card:hover {
  border: 1px solid transparent;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
}
.card__image {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  height: 288px;
  object-fit: cover;
}
.card__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 18px;
}
.card__content-top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 0 12px;
  margin-bottom: 6px;
}
.card__weight {
  color: var(--c-text-gray);
}
.card__description {
  margin-bottom: 12px;
}
.card__content-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}
.card__price {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
}

.price {
  text-transform: uppercase;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}
.price--old {
  text-decoration: line-through;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
.price--current {
  color: var(--c-text-dark-red);
  font-weight: 600;
}

.list.card {
  flex-direction: row;
  gap: 18px;
  padding: 18px;
}

.list .card__image {
  border-radius: 15px;
  width: 90px;
  height: 90px;
}

.list .card__content {
  padding: 0;
}

.list .card__content-bottom {
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .card__image {
    height: 240px;
  }
  .card__content {
    padding: 15px;
  }

  .list.card {
    gap: 15px;
  }
  .list .card__image {
    border-radius: 12px;
    width: 60px;
    height: 60px;
  }

  .price {
    font-size: 16px;
  }
  .price--old {
    font-size: 12px;
  }
}
</style>