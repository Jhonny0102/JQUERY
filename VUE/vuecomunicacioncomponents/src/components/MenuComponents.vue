<template>
    <div>
        <h1>Menu</h1>
        <ul id="menu">
            <li>
                <router-link to="/deporte">Deporte</router-link>
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
