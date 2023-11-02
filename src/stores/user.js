
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      account: '',
      name: '',
      dept: '',
      isAdmin: false,
      isLogin: false,
      items: [],
      hasChanged: true,
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
