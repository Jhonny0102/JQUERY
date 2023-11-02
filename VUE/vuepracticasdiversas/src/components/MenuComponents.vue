<template>
    <div>
        <h1>Menu</h1>
        <ul id="menu">
            <li>
                <router-link to="/"> Home |</router-link>
            </li>
            <li>
                <router-link to="/collatz"> Conjetura Collatz |</router-link>
            </li>
            <li>
                <router-link to="/tabla"> Tabla </router-link>
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