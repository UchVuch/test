<template>
  <div class="stepper">
    <button 
      v-if="count > 0"
      class="stepper__reset"
      @click="$emit('change', 0)"
    >
      <BaseIcon name="cross" size="10" />
    </button>
    <button
      v-if="count === 0"
      class="stepper__start"
      @click="$emit('change', 1)"
    >
      <BaseIcon name="plus" size="12" />
    </button>
    <div v-if="count > 0" class="stepper__counter">
      <button
        v-if="count > 1"
        class="stepper__minus"
        @click="$emit('change', count - 1)"
      >
        <BaseIcon name="minus" size="16" color="#fff" />
      </button>
      <div class="stepper__divider"></div>
      <span class="stepper__value">{{ count }}</span>
      <div class="stepper__divider"></div>
      <button
        class="stepper__plus"
        @click="$emit('change', count + 1)"
        >
        <BaseIcon name="plus" size="12" color="#fff" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'

defineProps<{count: number}>()
defineEmits<{change: [count: number]}>()
</script>

<style scoped>
.stepper {
  border-radius: 9px;
  display: flex;
  align-items: center;
  background-color: var(--c-bg-gray);
}

.stepper__counter {
  border-radius: 9px;
  display: flex;
  align-items: center;
  background-color: var(--c-bg-red);
}

.stepper button,
.stepper__value {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
}

.stepper button {
  cursor: pointer;
}

.stepper__divider {
  width: 1px;
  height: 20px;
  background-color: #f8998b;
}

.stepper__value {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #fff;
}
</style>