<template>
    <div>
        <h1>Delete Departamento</h1>
    </div>
</template>

<script>
    import ServiceDepartamento from './../services/ServiceDepartamento';
    const service =new ServiceDepartamento();
    export default {
        name:"DeleteDepartamento",
        mounted(){
            var id = this.$route.params.id;
            service.deleteDepartamento(id).then(result=>{
                console.log(result);
                this.$router.push("/");
            })
        }
    }
</script>