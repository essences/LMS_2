import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// アプリケーションの初期化
const app = createApp(App)

// 状態管理ライブラリの設定
app.use(createPinia())

// ルーターの設定
app.use(router)

// アプリケーションのマウント
app.mount('#app')
