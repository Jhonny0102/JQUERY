import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
var app = createApp(App);
app.config.globalProperties.$filters = {
    evaluarNumero(num){
        if(num % 2 == 0){
            return "<span style='background-color:lightgreen'>"+num+"</span>";
        }
        else{
            return "<span style='background-color:red'>"+num+"</span>";
        }
    }
}
app.use(router).mount('#app')
