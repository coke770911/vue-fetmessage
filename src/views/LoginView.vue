<template>
  <main class="form-signin w-100 m-auto">
    <div class="container text-center">
      <form id="loginform" action="api/login" method="post">
        <input type="hidden" name="token" v-model="loginForm.token">
        <h1 class="h3 mb-3 fw-normal">簡訊平台登入</h1>
        <div class="form-floating">
          <input class="form-control" type="text" v-model="loginForm.account" placeholder="Portal 帳號">
          <label for="account">Portal 帳號</label>
        </div>
        <div class="form-floating">
          <input class="form-control" type="password" v-model="loginForm.password" placeholder="Portal 密碼">
          <label for="password">Portal 密碼</label>
        </div>
          <button class="w-100 btn btn-lg btn-primary" type="button" @click="login" >確認登入</button>
      </form>
    </div>
    <div>
    <p>Count: {{ store.data.count }}</p>
    <button @click="store.increment">Increment</button>
    <button @click="store.decrement">Decrement</button>
  </div>
  </main>
</template>
<script>
import { useUserStore } from '@/stores/user';
export default {
  setup() {
    const store = useUserStore();
    return {
      store,
    };
  },
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
        token: ''
      }
    }
  },
  methods: {
    login() {
      const token = ''
      let account = this.loginForm.account
      let password = this.loginForm.password
      

      if (account !== '' && password !== '') {
        this.loginForm.token = token
      } else {
        alert('帳號密碼不能為空')
        return ;
      }

    }
  }
}
</script>

<style scoped>

html, body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>