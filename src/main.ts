import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import {VueQueryPlugin} from "@tanstack/vue-query";
import FloatingVue from 'floating-vue'
import App from "@/App.vue";
import 'floating-vue/dist/style.css'

const app = createApp(App)

app.use(createPinia());
app.use(router);

app.use(VueQueryPlugin);
app.use(FloatingVue);

app.mount('#app');
