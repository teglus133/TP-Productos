const textoProducto = document.getElementById("producto");
textoProducto.onkeyup = () => {
    if (textoProducto.value != "") {
        boton = document.getElementById("boton");
        boton.classList.remove("disabled")
    }
    else {
        boton.classList.add("disabled")
    }
}
