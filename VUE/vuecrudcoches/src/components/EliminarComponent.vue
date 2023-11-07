<template>
    <div>
        <h1>Eliminar Coche</h1>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();
    export default {
        name:"EliminarComponet",
        mounted(){
            var id = this.$route.params.id;
            service.deleteCoche(id).then(result => {
                console.log(result);
                alert("Se ha eliminado Correctamente");
                this.$router.push("/");
            })
        }
    }
</script>