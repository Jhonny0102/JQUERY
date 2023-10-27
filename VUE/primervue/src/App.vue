<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- Importar componente aqui -->
  <HomeComponent/>
  <HolaMundo/>
  <CineComponent/>
  <MusicaComponent/>
</template>

<script>
import CineComponent from './components/CineComponent.vue'
//import HolaMundo from './components/HolaMundo.vue'
// Importar componente aqui tambien
//import HelloWorld from './components/HelloWorld.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue';


export default {
  name: 'App',
  components: {
    //Declararlas aqui
    HomeComponent , CineComponent , MusicaComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
