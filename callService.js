import { guardarImgEnArray } from "./saveImgOnArray.js";

export function obtenerImagenDeNasa(array, pos, imgNasa, tituloImg, descripcionImg) {
  const api_key = 'n1GNgbOiXkB32ksqA0PF7WJC9CLA1dPbMfOfcYjY';

    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        guardarImgEnArray(array, pos, data);
        mostrarDatos(array, pos, imgNasa, tituloImg, descripcionImg);
      
      })
      .catch(error => console.error('Error al obtener imagen de la NASA:', error));
}

export function mostrarDatos(array, pos, imgNasa, tituloImg, descripcionImg){
    console.log("esto es la funcion de mostrar datos: ", array[pos.posicion]);

    imgNasa.src = array[pos.posicion].url;
    tituloImg.innerHTML = array[pos.posicion].title;
    descripcionImg.innerHTML = array[pos.posicion].explanation;
}

