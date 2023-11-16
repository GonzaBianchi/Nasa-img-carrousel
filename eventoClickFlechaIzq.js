import { mostrarDatos } from "./callService.js";

export function volverImgAnterior(array, pos, imgNasa, tituloImg, descripcionImg){
    if (pos.posicion === 0){
        alert("no hay imagenes");
    } else {
        pos.posicion--;
        mostrarDatos(array, pos, imgNasa, tituloImg, descripcionImg);
        console.log(pos.posicion);
    }
}