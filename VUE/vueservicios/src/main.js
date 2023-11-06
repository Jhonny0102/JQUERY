import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';
//Siempre que puedas organizalo de esta forma la sintaxis

var app = createApp(App);

app.use(router).mount('#app')