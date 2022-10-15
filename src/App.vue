<template>
  <div id="app">
    <NavigationBar />
    <MainPage />
    <!-- URLに対応したコンポーネントを表示 -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
