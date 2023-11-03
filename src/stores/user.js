
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      account: '',
      name: '',
      dept: '',
      isAdmin: false,
      isLogin: false,
      hasChanged: true,
    }
  },
  getters: {
    getUser() {
      return {
        account: this.account,
        name: this.name,
        dept: this.dept,
        isAdmin: this.isAdmin,
        isLogin: this.isLogin,
      }
    }
  },
  actions: {
    setUser(user) {
      this.account = user.account
      this.name = user.name
      this.dept = user.dept
      this.isAdmin = user.isAdmin
      this.isLogin = true
    }
  },
})
