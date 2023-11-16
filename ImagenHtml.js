export class ImagenHtml{
    constructor(array){
        this.imagenNasa = document.querySelector(".imgNasa");
        this.tituloImgNasa = document.querySelector(".tituloImg");
        this.descripcionImgNasa = document.querySelector(".descripcionImg");


        this.imagenNasa.src = array.url;
        this.tituloImgNasa.innerHTML = array.title;
        this.descripcionImgNasa.innerHTML = array.explanation;
    }
}