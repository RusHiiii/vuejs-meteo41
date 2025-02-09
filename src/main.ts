import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import {VueQueryPlugin} from "@tanstack/vue-query";
import FloatingVue from 'floating-vue'
import App from "@/App.vue";
import 'floating-vue/dist/style.css'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.use(createPinia());
app.use(router);

app.use(VueQueryPlugin);
app.use(FloatingVue);
app.use(VueApexCharts);

app.mount('#app');
