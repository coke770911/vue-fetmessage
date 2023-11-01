<script setup>

</script>
<template>
  <main>
    <form id="loginform" action="api/login" method="post">
      <h1 class="h3 mb-3 fw-normal">簡訊平台登入</h1>
      <div class="form-floating">
        <input class="form-control" type="text" name="account" id="account" placeholder="Portal 帳號">
        <label for="account">Portal 帳號</label>
      </div>
      <div class="form-floating">
        <input class="form-control" type="password" name="password" id="password" placeholder="Portal 密碼">
        <label for="password">Portal 密碼</label>
      </div>
        <button class="w-100 btn btn-lg btn-primary" type="button">確認登入</button>
    </form>
  </main>
</template>