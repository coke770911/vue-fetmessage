<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> 
  <footer class="navbar fixed-bottom bg-body-tertiary" style="">
    <div class="container">
      <p>© 2022 圖書資訊處建置 本系統建議使用Chrome Edge等瀏覽器。</p>
    </div>
  </footer>
</template>

<style scoped>
body {
  margin-bottom: 80px;
}
</style>
