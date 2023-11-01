<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <RouterView /> 
  <footer class="fixed-bottom">
    <div class="container">
      <p>© 2022 圖書資訊處建置 本系統建議使用Chrome Edge等瀏覽器。</p>
    </div>
  </footer>

  
</template>

<style scoped>

</style>
