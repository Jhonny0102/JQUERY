<template>
    <div>
        <h1>Detalles Departamento</h1>
        <h2 style="color:blue">
            ID: {{$route.params.id}},
            Nombre: {{$route.params.nombre}},
            Localidad: {{$route.params.localidad}}
        </h2>
    </div>
</template>

<script>
    export default {
        name:"DetallesDepartamento"
    }
</script>