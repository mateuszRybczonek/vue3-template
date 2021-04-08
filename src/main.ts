import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import messages from './locales'

const i18n = createI18n({
  locale: 'en',
  messages
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
