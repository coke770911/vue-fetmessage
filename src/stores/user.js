
import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    // 在此定义状态
    data: {
      count: 0,
      account: '',
      name: '',
      dept: '',
      token: '',
      isAdmin: false,
      isLogin: false,
    }
  }),
  actions: {
    increment() {
      this.data.count++;
    },

    decrement() {
      this.data.count--;
    },

    saveToLocalStorage() {

      localStorage.setItem('myStore', this.data);

    },

    loadFromLocalStorage() {

      const data = localStorage.getItem('myStore');
      console.dir(data)
      this.data = data
    }
  }
});

/*
export const userStore = defineStore('user', {
  state: () => {
    return {
      account: '',
      name: '',
      dept: '',
      token: '',
      isAdmin: false,
      isLogin: false,
    }
  },
  getters: {
    getUser() {
      return {
        account: this.account,
        name: this.name,
        dept: this.dept,
        token: this.token,
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
      this.token = user.token
      this.isAdmin = user.isAdmin
      this.isLogin = user.isLogin
    }
  },
})
*/