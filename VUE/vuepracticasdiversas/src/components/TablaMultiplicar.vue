<template>
    <div>
        <h1>Tabla Multiplicar</h1>
        <label>Numero: </label>
        <input type="number"/>
        <button @click="generarTabla()">Generar</button>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody ></tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "TablaMultiplicar",
    data(){
        return {
            html: "",
            numero : 0
        }
    },
    methods:{
        generarTabla(){
            this.html = "";
            for(var i = 1 ; i < 10 ; i++){
                var resultado = this.numero * i ;
                var operacion = this.numero + " * " + i;
                this.html += "<tr>";
                this.html += "<td>"+ operacion+"</td>"
                this.html += "<td>"+ resultado+"</td>"
                this.html += "<tr>";
            }
        }
    }
}
</script>