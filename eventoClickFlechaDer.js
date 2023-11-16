import { obtenerImagenDeNasa } from "./callService.js";
import { mostrarDatos } from "./callService.js";

export function generarNuevaImg(array, pos, imgNasa, tituloImg, descripcionImg){
    if(array.length > 1 && array.length-1 === pos.posicion){
        pos.posicion++;
        obtenerImagenDeNasa(array, pos, imgNasa, tituloImg, descripcionImg);
        console.log(pos.posicion);
    } else if (array.length > 1){
        pos.posicion++;
        mostrarDatos(array, pos, imgNasa, tituloImg, descripcionImg);
        console.log(pos.posicion);
    } else{
        pos.posicion++;
        obtenerImagenDeNasa(array, pos, imgNasa, tituloImg, descripcionImg);
        console.log(pos.posicion);
    }
}