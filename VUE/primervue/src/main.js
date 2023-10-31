import { createApp } from 'vue'
import App from './App.vue'
//Importamos la constante router de router.js
import router from './Router';
var app = createApp(App)

app.config.globalProperties.$filters = {
    //Aqui tendremos los metodos globales de nuestra app
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero*2;
    }
}

app.use(router).mount('#app')
