export class Producto {

    //Otra forma de declarar los atributos.
    constructor(
        public nombre: string,
        public imagen: string,
        public precio: number
    ){}

    // //Tendremos un constructor para recibir los datos de un producto
    // constructor(name:string, image:string , price: number){

    //     this.nombre = name;
    //     this.imagen = image;
    //     this.precio = price;
    // }
}