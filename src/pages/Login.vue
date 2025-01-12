<template>
  <div class="login">
    <h1>ログイン</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        />
      </div>

      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const form = reactive({
      email: '',
      password: ''
    })

    const handleLogin = () => {
      // TODO: 認証処理を実装
      router.push('/')
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
