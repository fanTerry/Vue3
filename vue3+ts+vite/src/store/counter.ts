import { defineStore } from 'pinia';

export  const useCounter = defineStore('counterStore', {
  state: () => ({
    counter: 0
  })
})