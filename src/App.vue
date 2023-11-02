<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const store = useUserStore()


</script>

<template>
  <header>
    <HeaderView />
  </header>
  <RouterView /> 
  <footer class="navbar fixed-bottom bg-body-tertiary" style="">
    <div class="container">
      <p>© 2022 圖書資訊處建置 本系統建議使用Chrome Edge等瀏覽器。</p>
    </div>
  </footer>
</template>
<script>

</script>
<style scoped>
body {
  margin-bottom: 80px;
}
</style>
