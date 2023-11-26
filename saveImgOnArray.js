import { Imagen } from "./Imagen.js";

export function guardarImgEnArray(array, pos, data){
        let imagen = new Imagen(data);
        array[pos.posicion] = imagen;
        console.log(array.length, array);
}