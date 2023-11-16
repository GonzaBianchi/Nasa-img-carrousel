export function crearDivImagenes(container){

    let flechaIzq = document.createElement("button");
    flechaIzq.classList.add("bx", "bx-chevron-left");
    let imgYTextoContainer = document.createElement("div");
    imgYTextoContainer.classList.add("imgYTextoContainer");
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

    container.appendChild(flechaIzq);
    container.appendChild(imgYTextoContainer);
    imgYTextoContainer.appendChild(imgNasa);
    imgYTextoContainer.appendChild(tituYDescImg);
    tituYDescImg.appendChild(tituloImg);
    tituYDescImg.appendChild(descripcionImg);
    container.appendChild(flechaDer);
}


