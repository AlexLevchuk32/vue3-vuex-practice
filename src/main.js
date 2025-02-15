import './assets/scss/style.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store/index';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
