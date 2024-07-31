import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCardsCounterStore = defineStore('cardsCount', () => {
  const cards = ref<Record<number, number>>({} as Record<number, number>)
  const setCardCount = (id: any, count: number) => {
    if (count === 0) {
      delete cards.value[id]
    } else {
      cards.value[id] = count
    }
  }

  if (localStorage.getItem('cards')) cards.value = JSON.parse(localStorage.getItem('cards') || '{}')
  watch(
    cards,
    () => {
      localStorage.setItem('cards', JSON.stringify(cards.value))
    },
    { deep: true }
  )

  return { cards, setCardCount }
})