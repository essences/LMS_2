<template>
  <div class="home">
    <h1>学習管理システム</h1>
    <nav>
      <router-link to="/login">ログイン</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

nav {
  margin-top: 2rem;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
