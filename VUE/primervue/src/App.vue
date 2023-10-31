<template>
  <!-- Importar componente aqui -->
  <h1>Titulo estatico de app</h1>
  <MenuComponent/>
  <hr/>
    <router-view></router-view>
  <hr/>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
//import HolaMundo from './components/HolaMundo.vue'
// Importar componente aqui tambien
//import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'App',
  components: {
    //Declararlas aqui
    MenuComponent
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
