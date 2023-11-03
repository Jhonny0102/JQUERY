<template>
    <div>
        <h1>Menu Components</h1>
        <ul id="menu">
            <li>
                <router-link to="/"> Home |</router-link>
            </li>
            <li>
                <router-link to="/deporte"> Deporte |</router-link>
            </li>
            <li>
                <router-link to="/numero"> Numeros |</router-link>
            </li>
            <li>
                <router-link to="/comic"> Comics |</router-link>
            </li>
            <li>
                <router-link to="/select"> Selec Multiple |</router-link>
            </li>
            <li>
                <router-link to="/generarcheckbox"> Generar CheckBox |</router-link>
            </li>
            <li>
                <router-link to="/numerodoble/77"> Numero Doble 77 |</router-link>
            </li>
            <li>
                <router-link to="/numerodoble/34"> Numero Doble 34 |</router-link>
            </li>
            <li>
                <router-link to="/numerodoble"> Numero Doble Sin </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"MenuComponents"
}
</script>

<style> 
    ul#menu li { 

        display: inline 

    } 
</style> 
