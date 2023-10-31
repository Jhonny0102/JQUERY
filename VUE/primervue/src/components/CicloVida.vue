<template>
    <div>
        <h1>Hooks</h1>
        <button @click="cambiarSaludo()">Modificar Saludo</button>
        <h1>{{saludo}}</h1>
    </div>
</template>

<script>
export default {
    name:"CicloVida",
    data(){
        return{
            saludo: "Hoy es martes..."
        }
    },
    methods : {
        //Aqui dentro debemos incluir nuestros metodos personalizados
        cambiarSaludo(){
            //Dentro de los metodos , para acceder a las variables data()
            //Debemos uilizar la plabara this
            this.saludo = "Y esta noche Halloween!!!!"
        }
    },
    mounted(){
        console.log("Component Montado");
    },
    unmounted(){
        console.log("Component Destruido");
    },
    updated(){
        console.log("Component Modificado");
    },
    created(){
        console.log("Component Creado");
    }
}
</script>