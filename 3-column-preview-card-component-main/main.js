let columnaActica = 0;
const columnas = document.querySelectorAll(".columna");
const cambio = function (indice){
    columnas[columnaActica].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActica = indice;

}

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        console.log(columna, indice);
        cambio(indice);
    })
   
});

