import { obtenerImagenDeNasa } from "./callService.js";
import { generarNuevaImg } from "./eventoClickFlechaDer.js";
import { volverImgAnterior } from "./eventoClickFlechaIzq.js";

let boton = document.querySelector(".generadorImg");
let cuerpo = document.querySelector("body");
let containerImgArrows = document.querySelector(".imgContainer");
let array = new Array();
let pos = { posicion: 0 };


let flechaIzq = document.createElement("button");
flechaIzq.classList.add("bx", "bx-chevron-left");
let imgYTextoContainer = document.createElement("div");
imgYTextoContainer.classList.add("imgYTextoContainer");
let imgNasaContainer = document.createElement("div");
imgNasaContainer.classList.add("imgNasaContainer");
let imgNasa = document.createElement("img");
imgNasa.classList.add("imgNasa");
let tituYDescImg = document.createElement("div");
tituYDescImg.classList.add("tituYDescImg");
let tituloImg = document.createElement("h3");
tituloImg.classList.add("tituloImg");
let descripcionImg = document.createElement("p");
descripcionImg.classList.add("descripcionImg");
let flechaDer = document.createElement("button");
flechaDer.classList.add("bx", "bx-chevron-right");


boton.addEventListener('click', function(){
    boton.style.display = 'none';
    cuerpo.style.justifyContent = 'space-around';
    containerImgArrows.style.height = '80%';
    containerImgArrows.appendChild(flechaIzq);
    containerImgArrows.appendChild(imgYTextoContainer);
    imgYTextoContainer.appendChild(imgNasa);
    imgYTextoContainer.appendChild(tituYDescImg);
    tituYDescImg.appendChild(tituloImg);
    tituYDescImg.appendChild(descripcionImg);
    containerImgArrows.appendChild(flechaDer);
    obtenerImagenDeNasa(array, pos, imgNasa, tituloImg, descripcionImg);
});


flechaDer.addEventListener('click', function(){
    generarNuevaImg(array, pos, imgNasa, tituloImg, descripcionImg);
});
flechaIzq.addEventListener('click', function(){
    volverImgAnterior(array, pos, imgNasa, tituloImg, descripcionImg);
});
